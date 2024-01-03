import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { FatesService } from "./fates.service";
import { CreateFateDto } from "./dto/create-fate.dto";
import { UpdateFateDto } from "./dto/update-fate.dto";
import { CreateModelContentCommonDto } from "../model-content-commons/dto/create-model-content-common.dto";
import { Prisma } from "@prisma/client";
import { ApiTags } from "@nestjs/swagger";

@Controller("fates")
@ApiTags("fates")
export class FatesController {
  constructor(private readonly fatesService: FatesService) {}

  @Post()
  create(@Body() createContentCommonDto: CreateModelContentCommonDto) {
    return this.fatesService.create(createContentCommonDto);
  }

  @Get()
  findAll() {
    return this.fatesService.findAll();
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateModelContentCommonDto: Prisma.ModelContentCommonsUpdateInput) {
    return this.fatesService.update(id, updateModelContentCommonDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.fatesService.remove(id);
  }
}
