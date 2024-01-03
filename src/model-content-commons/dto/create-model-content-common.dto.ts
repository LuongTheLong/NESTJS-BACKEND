import { ApiProperty } from "@nestjs/swagger";

export class CreateModelContentCommonDto {
  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  content: string;
}
