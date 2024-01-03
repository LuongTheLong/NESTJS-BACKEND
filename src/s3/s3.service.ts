import { Injectable } from "@nestjs/common";
import { CreateS3Dto } from "./dto/create-s3.dto";
import { UpdateS3Dto } from "./dto/update-s3.dto";
import * as AWS from "aws-sdk";
import { S3Dto } from "./dto/s3.dto";
import { url } from "inspector";

@Injectable()
export class S3Service {
  private readonly s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3();
  }

  async uploadFileToS3(fileBuffer: Buffer, fileName: string) {
    const params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
      Key: fileName,
      Body: fileBuffer,
    };

    const result = await this.s3.upload(params).promise();

    var objectReturn = new S3Dto();
    objectReturn.url = result.Location;
    objectReturn.key = result.Key;
    return objectReturn;
    // return result;
  }

  async deleteFileFromS3(fileName: string) {
    const params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
      Key: fileName,
    };

    const result = await this.s3.deleteObject(params).promise();

    return result;
  }
}
