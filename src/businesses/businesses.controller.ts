import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query } from "@nestjs/common";
import { BusinessesService } from "./businesses.service";
import { CreateBusinessDto } from "./dto/create-business.dto";
import { UpdateBusinessDto } from "./dto/update-business.dto";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt.guard";
import { Prisma } from "@prisma/client";
import { PaginationInput } from "src/common/pagination.dto";

@Controller("businesses")
@ApiTags("businesses")
export class BusinessesController {
  constructor(private readonly businessesService: BusinessesService) {}

  @Post()
  create(@Body() createBusinessDto: CreateBusinessDto) {
    return this.businessesService.create(createBusinessDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() paginationInput: PaginationInput) {
    return this.businessesService.findAll(paginationInput);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string, @Req() req) {
    return this.businessesService.findOne(id, req);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBusinessDto: Prisma.BusinessUpdateInput) {
    return this.businessesService.update(id, updateBusinessDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.businessesService.remove(id);
  }
}
