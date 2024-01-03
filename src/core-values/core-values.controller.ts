import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { CoreValuesService } from "./core-values.service";
import { CreateCoreValueDto } from "./dto/create-core-value.dto";
import { UpdateCoreValueDto } from "./dto/update-core-value.dto";
import { CreateModelContentCommonDto } from "../model-content-commons/dto/create-model-content-common.dto";
import { Prisma } from "@prisma/client";
import { ApiTags } from "@nestjs/swagger";

@Controller("core-values")
@ApiTags("core-values")
export class CoreValuesController {
  constructor(private readonly coreValuesService: CoreValuesService) {}

  @Post()
  create(@Body() createContentCommonDto: CreateModelContentCommonDto) {
    return this.coreValuesService.create(createContentCommonDto);
  }

  @Get()
  findAll() {
    return this.coreValuesService.findAll();
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateModelContentCommonDto: Prisma.ModelContentCommonsUpdateInput) {
    return this.coreValuesService.update(id, updateModelContentCommonDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.coreValuesService.remove(id);
  }
}
