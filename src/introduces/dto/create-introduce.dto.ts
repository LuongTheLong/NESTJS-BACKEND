import { ApiProperty } from "@nestjs/swagger";

export class CreateIntroduceDto {
  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  content: string;

  @ApiProperty({ required: true })
  image: string;
}
