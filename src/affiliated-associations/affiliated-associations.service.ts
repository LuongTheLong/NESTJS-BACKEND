import { Injectable } from "@nestjs/common";
import { CreateAffiliatedAssociationDto } from "./dto/create-affiliated-association.dto";
import { UpdateAffiliatedAssociationDto } from "./dto/update-affiliated-association.dto";
import { PaginationInput } from "../common/pagination.dto";
import { DatabaseService } from "../database/database.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class AffiliatedAssociationsService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createPartnerDto: CreateAffiliatedAssociationDto) {
    return this.databaseService.affiliatedAssociations.create({
      data: {
        image: createPartnerDto.image,
        name: createPartnerDto.name,
        domain: createPartnerDto.domain,
      },
    });
  }

  findAll(pagination: PaginationInput) {
    return this.databaseService.affiliatedAssociations.findMany({
      skip: (+pagination.page - 1) * +pagination.count,
      take: +pagination.count,
    });
  }

  findOne(id: string) {
    return this.databaseService.affiliatedAssociations.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: string, updateAffiliatedAssociationDto: Prisma.AffiliatedAssociationsUpdateInput) {
    return this.databaseService.affiliatedAssociations.update({
      where: {
        id,
      },
      data: updateAffiliatedAssociationDto,
    });
  }

  remove(id: string) {
    return this.databaseService.affiliatedAssociations.delete({
      where: {
        id,
      },
    });
  }
}
