import { ApiProperty } from "@nestjs/swagger";

export class CreateHistoryStartDto {
  @ApiProperty({ required: false })
  year: string;

  @ApiProperty({ required: false })
  title: string;

  @ApiProperty({ required: false })
  content: string;
}
