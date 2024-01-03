import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateBusinessDto } from "./dto/create-business.dto";
import { UpdateBusinessDto } from "./dto/update-business.dto";
import { DatabaseService } from "src/database/database.service";
import { AuthService } from "src/auth/auth.service";
import { Prisma } from "@prisma/client";
import { Request } from "express";
import { PaginationInput } from "src/common/pagination.dto";

@Injectable()
export class BusinessesService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly authService: AuthService,
  ) {}

  async create(createBusinessDto: CreateBusinessDto) {
    const emailExistInUser = await this.databaseService.users.findUnique({
      where: {
        email: createBusinessDto.email,
      },
    });

    const emailExistInBusiness = await this.databaseService.business.findUnique({
      where: {
        email: createBusinessDto.email,
      },
    });

    if (emailExistInUser || emailExistInBusiness) {
      throw new BadRequestException("Email already exist");
    }

    const hashedPassword = await this.authService.hashPassword(createBusinessDto.password);

    return this.databaseService.business.create({
      data: {
        hashedPassword: hashedPassword,
        name: createBusinessDto.name,
        email: createBusinessDto.email,
        position: createBusinessDto.position,
        phoneNumber: createBusinessDto.phoneNumber,
        dateOfBirth: createBusinessDto.dateOfBirth,
        isPublicInfo: createBusinessDto.isPublicInfo,
        companyName: createBusinessDto.companyName,
        domainWorking: createBusinessDto.domainWorking,
        businessAddress: createBusinessDto.businessAddress,
        businessEmail: createBusinessDto.businessEmail,
        productBusiness: createBusinessDto.productBusiness,
        businessMarketing: createBusinessDto.businessMarketing,
        imageLogo: createBusinessDto.imageLogo,
        invitationLetter: createBusinessDto.invitationLetter,
        businessLicenseOrOther: createBusinessDto.businessLicenseOrOther,
        websiteBusiness: createBusinessDto.websiteBusiness,
        numberOfBusinessCertificate: createBusinessDto.numberOfBusinessCertificate,
        theFirstTime: createBusinessDto.theFirstTime,
        theSecondTime: createBusinessDto.theSecondTime,
        addressProvideCertificate: createBusinessDto.addressProvideCertificate,
        fullNamePersonalInLaw: createBusinessDto.fullNamePersonalInLaw,
        positionPersonalInLaw: createBusinessDto.positionPersonalInLaw,
        emailPersonalInLaw: createBusinessDto.emailPersonalInLaw,
        phoneNumberPersonalInLaw: createBusinessDto.phoneNumberPersonalInLaw,
        taxCode: createBusinessDto.taxCode,
        authorizedCapital: createBusinessDto.authorizedCapital,
        lastYearRevenue: createBusinessDto.lastYearRevenue,
        typeOfBusiness: createBusinessDto.typeOfBusiness,
        nameOfAssistance: createBusinessDto.nameOfAssistance,
        phoneNumberOfAssistance: createBusinessDto.phoneNumberOfAssistance,
        positionOfAssistance: createBusinessDto.positionOfAssistance,
        emailOfAssistance: createBusinessDto.emailOfAssistance,
        checkConfirmBox: createBusinessDto.checkConfirmBox,
        status: createBusinessDto.status,
      },
    });
  }

  findAll(pagination: PaginationInput) {
    return this.databaseService.business.findMany({
      skip: (+pagination.page - 1) * +pagination.count,
      take: +pagination.count,
    });
  }

  async findOne(id: string, req?: Request) {
    const user = await this.databaseService.business.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException();
    }

    const decodedUser = req.user as { id: string; email: string };

    console.log(decodedUser);

    if (user.id !== decodedUser.id) {
      throw new ForbiddenException();
    }

    delete user.hashedPassword;

    return { user };
  }

  async update(id: string, updateBusinessDto: Prisma.BusinessUpdateInput) {
    const userFound = await this.findOne(id);

    if (!userFound) {
      throw new NotFoundException();
    }

    return await this.databaseService.business.update({
      where: {
        id,
      },
      data: updateBusinessDto,
    });
  }

  remove(id: string) {
    return this.databaseService.business.delete({
      where: {
        id,
      },
    });
  }
}
