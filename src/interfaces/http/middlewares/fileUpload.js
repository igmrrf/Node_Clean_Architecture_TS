/**
 * @module lib/uploader
 * @description Parses a multipart form and uploads the specified files to disk
 */
import multer from "multer";
import { MAX_FILE_UPLOAD_SIZE } from "helpers/constants";
import InvalidPayloadError from "../errors/InvalidPayloadError";

const ONE_MB = 1000000;

const diskStorage = multer.diskStorage({
  destination: "temp/uploads",
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}-${
      file.originalname
    }`;
    cb(null, `${file.fieldname}-${uniqueSuffix}`);
  },
});

/**
 * Validates files to ensure that they are in the correct format before uploading
 * @param {String} [fileType="image"] - The expected file type
 */
const fileFilter =
  (fileType = "image") =>
  (req, file, cb) => {
    switch (fileType) {
      case "image":
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
          cb(null, true);
        } else {
          cb(new InvalidPayloadError("Only images are allowed"));
        }
        break;
      case "csv":
        if (file.mimetype === "text/csv") {
          cb(null, true);
        } else {
          cb(new InvalidPayloadError("Only CSVs are allowed"));
        }
        break;
      case "pdf":
        if (file.mimetype === "application/pdf") {
          cb(null, true);
        } else {
          cb(new InvalidPayloadError("Only PDFs are allowed"));
        }
        break;
      case "video":
        if (["video/mp4", "video/3gpp"].includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(
            new InvalidPayloadError("Only .mp4 and .3gpp formats are allowed"),
          );
        }
        break;
      case "document":
        if (
          [
            "application/pdf",
            "image/jpeg",
            "image/png",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(file.mimetype)
        ) {
          cb(null, true);
        } else {
          cb(
            new InvalidPayloadError(
              "Only PDF, word documents, and images are allowed",
            ),
          );
        }
        break;
      default:
        cb(new InvalidPayloadError("Unknown file Type"));
        break;
    }
  };

/**
 * Returns a middleware for parsing multipart forms
 * @param {Object} data - Data about the file being uploaded
 * @param {String} data.fileType - The type of file e.g image, pdf
 * @param {String} data.fieldName - The name of the form-data field containing the file
 */
// eslint-disable-next-line func-names
const uploader =
  ({ fileType, fieldName, fields }) =>
  (req, res, next) => {
    const multerInstance = multer({
      storage: diskStorage,
      fileFilter: fileFilter(fileType),
      limits: {
        fileSize: fileType === "video" ? null : MAX_FILE_UPLOAD_SIZE,
      },
    });
    const uploadMiddleware =
      fields && fields.length
        ? multerInstance.fields(fields)
        : multerInstance.single(fieldName);
    uploadMiddleware(req, res, (error) => {
      if (error) {
        const message = `Upload error: ${error.message}.`;
        switch (error.code) {
          case "LIMIT_FILE_SIZE": {
            const uploadLimitInMB = (MAX_FILE_UPLOAD_SIZE / ONE_MB).toFixed(2);
            return next(
              new InvalidPayloadError(
                `${message} Only files smaller than ${MAX_FILE_UPLOAD_SIZE} bytes` +
                  ` (${uploadLimitInMB}MB) are allowed`,
              ),
            );
          }
          case "LIMIT_UNEXPECTED_FILE":
            return next(
              new InvalidPayloadError(
                `${message} Document should be uploaded using ` +
                  `'${
                    fields && fields.length
                      ? fields.map((el) => el.name)
                      : fieldName
                  }' field(s)`,
              ),
            );
          default:
            return next(new InvalidPayloadError(message));
        }
      }
      return next();
    });
  };

export default uploader;
