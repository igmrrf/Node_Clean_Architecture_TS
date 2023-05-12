import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/public/uploads/");
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
  },
});

const filter = (req: any, file: any, cb: any) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  }
  cb(new Error("Invalid Mime Type, only JPEG and PNG"), false);
};

const handleFilesUploaded = multer({
  storage,
  fileFilter: filter,
  limits: { fileSize: 1024 * 1024 * 5 },
}).any();

export default handleFilesUploaded;
