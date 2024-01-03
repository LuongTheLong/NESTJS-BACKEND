import { ApiProperty } from "@nestjs/swagger";

export class FileInputDto {
  @ApiProperty({ required: true })
  url: string;
}
