import { ApiProperty } from "@nestjs/swagger";

export class CreatePartnerDto {
  @ApiProperty({ required: true })
  image: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  domain: string;
}
