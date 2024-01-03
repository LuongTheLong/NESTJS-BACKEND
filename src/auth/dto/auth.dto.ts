import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, Length } from "class-validator";
import { Roles as Roles, STATUS } from "@prisma/client";

export class CreateUserDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  address: string;

  @ApiProperty({ required: true })
  dateOfBirth: Date;

  @ApiProperty({ required: false })
  jobType: string;

  @ApiProperty({ required: true })
  @IsEmail()
  email: string;

  @ApiProperty({ required: true })
  company: string;

  @ApiProperty({ required: true })
  @IsString()
  @Length(3, 20, { message: "Password has length from 3 to 20 chars" })
  password: string;

  @ApiProperty({ required: true })
  @IsPhoneNumber("VI")
  phoneNumber: string;

  @ApiProperty({ required: true })
  @IsOptional()
  position: string;

  @ApiProperty({ required: false })
  isPublicInfo: boolean;

  @ApiProperty({ required: true })
  imageCID: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nameOfAssistance: string;

  @ApiProperty({ required: false })
  @IsPhoneNumber("VI")
  @IsOptional()
  phoneNumberOfAssistance: string;

  @ApiProperty({ required: false })
  @IsOptional()
  positionOfAssistance: string;

  @ApiProperty({ required: false })
  @IsEmail()
  @IsOptional()
  emailOfAssistance: string;

  @ApiProperty({ required: false })
  roles: Roles;

  @ApiProperty({ required: false, default: STATUS.PENDING, enum: STATUS })
  status: STATUS;

  @ApiProperty({ default: false })
  checkConfirmBox: boolean;
}
