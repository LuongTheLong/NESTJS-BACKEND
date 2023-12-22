import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/auth.dto';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';
import { LoginModelDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from './utils/constants';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
    constructor(
        private readonly databaseService: DatabaseService,
        private readonly jwtService: JwtService) {

    }

    async signUp(createUserDto: CreateUserDto) {
        const emailExist = await this.databaseService.users.findUnique({
            where: {
                email: createUserDto.email,
            }
        })

        if (emailExist) {
            throw new BadRequestException('Email already exist');
        }

        const hashedPassword = await this.hashPassword(createUserDto.password);



        return this.databaseService.users.create({
            data: {
                hashedPassword: hashedPassword,
                name: createUserDto.name,
                address: createUserDto.address,
                dateOfBirth: createUserDto.dateOfBirth,
                jobType: createUserDto.jobType,
                email: createUserDto.email,
                company: createUserDto.company,
                phoneNumber: createUserDto.phoneNumber,
                position: createUserDto.position,
                isPublicInfo: createUserDto.isPublicInfo,
                imageCID: createUserDto.imageCID,
                nameOfAssistance: createUserDto.nameOfAssistance,
                phoneNumberOfAssistance: createUserDto.phoneNumberOfAssistance,
                positionOfAssistance: createUserDto.positionOfAssistance,
                emailOfAssistance: createUserDto.emailOfAssistance,
                checkConfirmBox: createUserDto.checkConfirmBox
            }
        });
        // return { message: 'sign up succesfull' };
    }

    async signIn(loginModelDto: LoginModelDto, req: Request, res: Response) {
        const userFound = await this.databaseService.users.findUnique({
            where: {
                email: loginModelDto.email
            }
        });

        if (!userFound) {
            throw new BadRequestException('Email or Password is wrong, please check again!');
        }

        const isMatch = await this.comparePassword({ password: loginModelDto.password, hash: userFound.hashedPassword });

        if (!isMatch) {
            throw new BadRequestException('Email or Password is wrong, please check again!');
        }

        const token = await this.signToken({ id: userFound.id, email: userFound.email });

        if (!token) {
            throw new ForbiddenException();
        }

        res.cookie('token', token);

        return res.send({ message: 'Logged in succesfully' });
    }

    async signOut(req: Request, res: Response) {
        res.clearCookie('token');
        return res.send({ message: 'sign out succesfull' });
    }

    async hashPassword(password: string) {
        const saltOrRounds = 10;

        const hashedPassword = await bcrypt.hash(password, saltOrRounds);

        return hashedPassword;
    }

    async comparePassword(args: { password: string, hash: string }) {
        const isMatch = await bcrypt.compare(args.password, args.hash);
        return isMatch;
    }

    async signToken(args: { id: number, email: string }) {
        const payload = args;

        return this.jwtService.signAsync(payload, { secret: jwtSecret })
    }
}
