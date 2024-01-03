import { ApiProperty } from "@nestjs/swagger";
import { STATUS } from "@prisma/client";
import { IsEmail, IsOptional, IsPhoneNumber, IsString, IsUrl, Length } from "class-validator";

export class CreateBusinessDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  @IsEmail()
  email: string;

  @ApiProperty({ required: true })
  position: string;

  @ApiProperty({ required: true })
  @IsPhoneNumber("VI")
  phoneNumber: string;

  @ApiProperty({ required: true })
  dateOfBirth: Date;

  @ApiProperty({ required: true })
  @IsString()
  @Length(3, 20, { message: "Password has length from 3 to 20 chars" })
  password: string;

  @ApiProperty({ default: false })
  isPublicInfo: boolean;

  @ApiProperty({ required: true })
  companyName: string;

  @ApiProperty({ required: true })
  domainWorking: string;

  @ApiProperty({ required: true })
  businessAddress: string;

  @ApiProperty({ required: false })
  @IsEmail()
  businessEmail: string;

  @ApiProperty({ required: false })
  productBusiness: string;

  @ApiProperty({ required: false })
  businessMarketing: string;

  @ApiProperty({ required: true })
  imageLogo: string;

  @ApiProperty({ required: true })
  invitationLetter: string;

  @ApiProperty({ required: true })
  businessLicenseOrOther: string;

  @ApiProperty({ required: false })
  @IsUrl()
  websiteBusiness: string;

  @ApiProperty({ required: true })
  numberOfBusinessCertificate: string;

  @ApiProperty({ required: true })
  theFirstTime: string;

  @ApiProperty({ required: false })
  theSecondTime: string;

  @ApiProperty({ required: true })
  addressProvideCertificate: string;

  @ApiProperty({ required: true })
  fullNamePersonalInLaw: string;

  @ApiProperty({ required: true })
  positionPersonalInLaw: string;

  @ApiProperty({ required: true })
  @IsEmail()
  emailPersonalInLaw: string;

  @ApiProperty({ required: true })
  @IsPhoneNumber("VI")
  phoneNumberPersonalInLaw: string;

  @ApiProperty({ required: true })
  taxCode: string;

  @ApiProperty({ required: true })
  authorizedCapital: string;

  @ApiProperty({ required: true })
  lastYearRevenue: string;

  @ApiProperty({ required: true })
  typeOfBusiness: string;

  @ApiProperty({ required: false })
  nameOfAssistance: string;

  @ApiProperty({ required: false })
  @IsPhoneNumber("VI")
  @IsOptional()
  phoneNumberOfAssistance: string;

  @ApiProperty({ required: false })
  positionOfAssistance: string;

  @ApiProperty({ required: false })
  @IsEmail()
  @IsOptional()
  emailOfAssistance: string;

  @ApiProperty({ default: false })
  checkConfirmBox: boolean;

  @ApiProperty({ required: false, default: STATUS.PENDING, enum: STATUS })
  status: STATUS;
}
