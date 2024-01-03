import { ApiProperty } from "@nestjs/swagger";
import { BooleanNullable } from "aws-sdk/clients/glue";

export class CreateEventDto {
  @ApiProperty({ required: true })
  locationOrganize: string;

  @ApiProperty({ required: true })
  unitOrganize: string;

  @ApiProperty({ required: false })
  unitAction: string;

  @ApiProperty({ required: true })
  timeStart: Date;

  @ApiProperty({ required: true })
  timeEnd: Date;

  @ApiProperty({ required: true })
  content: string;

  @ApiProperty({ required: false, default: false })
  invitation: boolean;

  @ApiProperty({ required: false, default: false })
  regisJoinIn: boolean;

  @ApiProperty({ required: false, default: false })
  regisSponsor: boolean;
}
