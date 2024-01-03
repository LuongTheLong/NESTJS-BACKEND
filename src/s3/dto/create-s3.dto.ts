import { ApiProperty } from "@nestjs/swagger";

export class CreateS3Dto {
  @ApiProperty({ required: false, type: "string", format: "binary" })
  file: Express.Multer.File;
}
