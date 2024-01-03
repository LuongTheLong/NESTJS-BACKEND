import { ApiProperty } from "@nestjs/swagger";
// import { Role as Role } from '@prisma/client';

export class CreateEmployeeDto {
  @ApiProperty({ required: false })
  name: string;

  @ApiProperty({ required: false })
  email: string;

  // @ApiProperty({ required: false, enum: ['ADMIN', 'MEMBER', 'USER'] })
  // role: Role;

  @ApiProperty({ type: "array", required: false, items: { type: "string", format: "binary" } })
  file_avatar: Express.Multer.File[];

  @ApiProperty({ type: "array", required: false, items: { type: "string", format: "binary" } })
  file_background: Express.Multer.File[];
}
