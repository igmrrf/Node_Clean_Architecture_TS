import { S3 } from "aws-sdk";
import fs from "fs";
import { ConvictConfig } from "helpers/types";
import { Logger } from "winston";

class AmazonS3 {
  s3: any;
  region: string;
  bucketName: string;
  config: ConvictConfig;
  logger: Logger;

  constructor({ config, logger }: { config: ConvictConfig; logger: Logger }) {
    this.bucketName = config.get("aws.bucketName");
    this.region = config.get("aws.region");
    const secretKey = config.get("aws.secretKey");
    const accessKey = config.get("aws.accessKey");
    this.config = config;
    this.logger = logger;
    this.s3 = new S3({
      secretAccessKey: secretKey,
      accessKeyId: accessKey,
      region: this.region,
    });
  }

  createBucket() {
    const params = {
      Bucket: this.bucketName,
      CreateBucketConfiguration: {
        LocationConstraint: this.region,
      },
    };

    this.s3.createBucket(params, function (err: { stack: any }, data: { Location: any }) {
      if (err) console.log(err, err.stack);
      else console.log("Bucket Created Successfully", data.Location);
    } as any);
  }

  uploadFile(file: any, name: string) {
    const fileContent = fs.readFileSync(file);

    const params = {
      Bucket: this.bucketName,
      Key: name,
      Body: fileContent,
    };

    this.s3.upload(params, function (err: any, data: any) {
      if (err) {
        throw err;
      }
      console.log(`File uploaded successfully. ${data.Location}`);
    } as any);
  }
}

export default AmazonS3;
