import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/auth.dto";
import { DatabaseService } from "../database/database.service";
import * as bcrypt from "bcrypt";
import { LoginModelDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";
import { jwtSecret } from "./utils/constants";
import { Request, Response } from "express";
import { Roles as Roles, STATUS } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { RolesService } from "../roles/roles.service";
import { CreateAdminDto } from "./dto/adminAccountInput";
import { use } from "passport";
import { isEmpty } from "class-validator";
import { stat } from "fs";
import { create } from "domain";
const { v4: uuidv4 } = require("uuid");

@Injectable()
export class AuthService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly jwtService: JwtService,
    private readonly roleService: RolesService,
  ) {}

  async createAccountAdmin(dto: CreateAdminDto) {
    const roleAdmin = await this.databaseService.roles.findUnique({
      where: {
        searchingName: "admin",
      },
    });
    var role = roleAdmin;
    if (!role) {
      role = {
        id: uuidv4(),
        name: "ADMIN",
        searchingName: "admin",
        createAt: new Date(Date.now()),
        updateAt: new Date(),
      };
      this.roleService.create(role);
    }
    var userDto = new CreateUserDto();
    userDto.email = dto.email;
    userDto.password = dto.password;
    userDto.phoneNumber = "+840123456789";
    userDto.emailOfAssistance = dto.email;
    userDto.phoneNumberOfAssistance = userDto.phoneNumber;
    userDto.name = "admin";
    userDto.address = "string";
    userDto.dateOfBirth = new Date();
    userDto.jobType = "string";
    userDto.company = "string";
    userDto.position = "string";
    userDto.isPublicInfo = true;
    userDto.imageCID = "string";
    userDto.nameOfAssistance = "string";
    userDto.positionOfAssistance = "string";
    userDto.checkConfirmBox = true;
    userDto.roles = role;
    userDto.status = STATUS.DONE;

    await this.signUp(userDto);

    return userDto;
  }

  async signUp(createUserDto: CreateUserDto) {
    const emailExistInUser = await this.databaseService.users.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    const emailExistInBusiness = await this.databaseService.business.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (emailExistInUser || emailExistInBusiness) {
      throw new BadRequestException("Email already exist");
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
        checkConfirmBox: createUserDto.checkConfirmBox,
        status: createUserDto.status,
        roles:
          createUserDto.roles !== null &&
          typeof createUserDto.roles !== "undefined" &&
          typeof createUserDto.roles.name !== "undefined" &&
          typeof createUserDto.roles !== "undefined"
            ? {
                connectOrCreate: {
                  where: {
                    name: createUserDto.roles.name,
                  },
                  create: {
                    name: createUserDto.roles.name,
                    searchingName: createUserDto.roles.name.toLocaleLowerCase(),
                  },
                },
              }
            : {},
      },
    });
    // return { message: 'sign up succesfull' };
  }

  async signInUser(loginModelDto: LoginModelDto, req: Request, res: Response) {
    const userFound = await this.databaseService.users.findUnique({
      where: {
        email: loginModelDto.email,
      },
      include: {
        roles: true,
      },
    });

    if (userFound) {
      const isMatch = await this.comparePassword({ password: loginModelDto.password, hash: userFound.hashedPassword });

      if (!isMatch) {
        throw new BadRequestException("Email or Password is wrong, please check again!");
      }

      if (userFound.status !== STATUS.DONE) {
        throw new BadRequestException("Account is not permit to login");
      }

      const token = await this.signToken({ id: userFound.id, email: userFound.email, roles: userFound.roles });

      if (!token) {
        throw new ForbiddenException();
      }

      res.cookie("token", token);

      return res.send({ message: "Logged in succesfully" });
    }

    const businessFound = await this.databaseService.business.findUnique({
      where: {
        email: loginModelDto.email,
      },
    });

    if (businessFound) {
      const isMatchBusiness = await this.comparePassword({ password: loginModelDto.password, hash: businessFound.hashedPassword });

      if (!isMatchBusiness) {
        throw new BadRequestException("Email or Password is wrong, please check again!");
      }

      if (businessFound.status !== STATUS.DONE) {
        throw new BadRequestException("Account is not permit to login");
      }

      const token = await this.signToken({ id: businessFound.id, email: businessFound.email, roles: [] });

      if (!token) {
        throw new ForbiddenException();
      }

      res.cookie("token", token);

      return res.send({ message: "Logged in succesfully" });
    }

    throw new BadRequestException("Email or Password is wrong, please check again!");
  }

  async signOut(req: Request, res: Response) {
    res.clearCookie("token");
    return res.send({ message: "sign out succesfull" });
  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    return hashedPassword;
  }

  async comparePassword(args: { password: string; hash: string }) {
    const isMatch = await bcrypt.compare(args.password, args.hash);
    return isMatch;
  }

  async signToken(args: { id: string; email: string; roles: Roles[] }) {
    const payload = args;

    return this.jwtService.signAsync(payload, { secret: jwtSecret });
  }

  async reviewUser(id: string, status: STATUS) {
    const userFound = await this.databaseService.users.findFirst({
      where: {
        id,
      },
    });
    if (userFound) {
      userFound.status = status;
      await this.databaseService.users.update({
        where: {
          id,
        },
        data: userFound,
      });
      return { coed: 200, message: "review successfuly" };
    }
    return new NotFoundException();
  }

  async reviewBusiness(id: string, status: STATUS) {
    const businessFound = await this.databaseService.business.findFirst({
      where: {
        id,
      },
    });

    if (businessFound) {
      businessFound.status = status;
      await this.databaseService.business.update({
        where: {
          id,
        },
        data: businessFound,
      });
      return { code: 200, message: "review successfuly" };
    }
    return new NotFoundException();
  }
}
