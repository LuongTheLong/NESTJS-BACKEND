import { ApiProperty } from "@nestjs/swagger";

export class CreateAffiliatedAssociationDto {
  @ApiProperty({ required: true })
  image: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  domain: string;
}
