import { ApiProperty } from "@nestjs/swagger";

export class PaginationInput {
  @ApiProperty({ required: true, default: 1 })
  page: number;

  @ApiProperty({ required: true, default: 10 })
  count: number;
}
