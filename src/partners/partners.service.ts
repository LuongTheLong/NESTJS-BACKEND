import { Injectable } from "@nestjs/common";
import { CreatePartnerDto } from "./dto/create-partner.dto";
import { UpdatePartnerDto } from "./dto/update-partner.dto";
import { DatabaseService } from "src/database/database.service";
import { PaginationInput } from "../common/pagination.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class PartnersService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createPartnerDto: CreatePartnerDto) {
    return this.databaseService.partners.create({
      data: {
        image: createPartnerDto.image,
        name: createPartnerDto.name,
        domain: createPartnerDto.domain,
      },
    });
  }

  findAll(pagination: PaginationInput) {
    return this.databaseService.partners.findMany({
      skip: (+pagination.page - 1) * +pagination.count,
      take: +pagination.count,
    });
  }

  findOne(id: string) {
    return this.databaseService.partners.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: string, updatePartnerDto: Prisma.PartnersUpdateInput) {
    return this.databaseService.partners.update({
      where: {
        id,
      },
      data: updatePartnerDto,
    });
  }

  remove(id: string) {
    return this.databaseService.partners.delete({
      where: {
        id,
      },
    });
  }
}
