import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEmpty, IsNotEmpty, IsPhoneNumber, IsString, Length } from 'class-validator';

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
    @Length(3, 20, { message: 'Password has length from 3 to 20 chars' })
    password: string;

    @ApiProperty({ required: true })
    @IsPhoneNumber('VI')
    phoneNumber: string;

    @ApiProperty({ required: true })
    position: string;

    @ApiProperty({ required: false })
    isPublicInfo: boolean;

    @ApiProperty({ required: true })
    imageCID: string;

    @ApiProperty({ required: false })
    nameOfAssistance: string;

    @ApiProperty({ required: false })
    @IsPhoneNumber('VI')
    phoneNumberOfAssistance: string;

    @ApiProperty({ required: false })
    positionOfAssistance: string;

    @ApiProperty({ required: false })
    @IsEmail()
    emailOfAssistance: string;

    @ApiProperty({ required: false })
    checkConfirmBox: boolean;
}