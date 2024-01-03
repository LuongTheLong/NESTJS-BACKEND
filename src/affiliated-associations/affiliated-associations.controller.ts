import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { AffiliatedAssociationsService } from "./affiliated-associations.service";
import { CreateAffiliatedAssociationDto } from "./dto/create-affiliated-association.dto";
import { UpdateAffiliatedAssociationDto } from "./dto/update-affiliated-association.dto";
import { PaginationInput } from "../common/pagination.dto";
import { Prisma } from "@prisma/client";
import { ApiTags } from "@nestjs/swagger";

@Controller("affiliated-associations")
@ApiTags("affiliated-associations")
export class AffiliatedAssociationsController {
  constructor(private readonly affiliatedAssociationsService: AffiliatedAssociationsService) {}

  @Post()
  create(@Body() createAffiliatedAssociationDto: CreateAffiliatedAssociationDto) {
    return this.affiliatedAssociationsService.create(createAffiliatedAssociationDto);
  }

  @Get()
  findAll(@Query() paginationInput: PaginationInput) {
    return this.affiliatedAssociationsService.findAll(paginationInput);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.affiliatedAssociationsService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAffiliatedAssociationDto: Prisma.AffiliatedAssociationsUpdateInput) {
    return this.affiliatedAssociationsService.update(id, updateAffiliatedAssociationDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.affiliatedAssociationsService.remove(id);
  }
}
