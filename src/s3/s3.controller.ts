import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from "@nestjs/common";
import { S3Service } from "./s3.service";
import { CreateS3Dto } from "./dto/create-s3.dto";
import { UpdateS3Dto } from "./dto/update-s3.dto";
import { AnyFilesInterceptor, FileInterceptor, NoFilesInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";

@Controller("s3")
@ApiTags("s3")
export class S3Controller {
  constructor(private readonly s3Service: S3Service) {}

  @Post("upload-file")
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(@UploadedFile() file) {
    const { buffer, originalname } = file;

    const objectReturn = await this.s3Service.uploadFileToS3(buffer, originalname);

    return objectReturn;
  }

  @Get("delete/:fileName")
  async deleteFile(@Param("fileName") fileName: string) {
    // const bucketName = 'your-s3-bucket-name'; // Replace with your actual S3 bucket name

    const objectReturn = await this.s3Service.deleteFileFromS3(fileName);

    return objectReturn;
  }
}
