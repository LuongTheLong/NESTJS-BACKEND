import { ApiProperty } from "@nestjs/swagger";

export class CreateNewsDto {
  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  content: string;
}
