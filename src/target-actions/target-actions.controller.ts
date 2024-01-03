import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { TargetActionsService } from "./target-actions.service";
import { CreateTargetActionDto } from "./dto/create-target-action.dto";
import { UpdateTargetActionDto } from "./dto/update-target-action.dto";
import { CreateModelContentCommonDto } from "../model-content-commons/dto/create-model-content-common.dto";
import { Prisma } from "@prisma/client";
import { ApiTags } from "@nestjs/swagger";
import { FileInputDto } from "../common/fileInputOnlyDto";

@Controller("target-actions")
@ApiTags("target-actions")
export class TargetActionsController {
  constructor(private readonly targetActionsService: TargetActionsService) {}

  @Post()
  create(@Body() createContentCommonDto: CreateModelContentCommonDto) {
    return this.targetActionsService.create(createContentCommonDto);
  }

  @Get()
  findAll() {
    return this.targetActionsService.findAll();
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateModelContentCommonDto: Prisma.ModelContentCommonsUpdateInput) {
    return this.targetActionsService.update(id, updateModelContentCommonDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.targetActionsService.remove(id);
  }

  @Post("import-file")
  importFile(@Body() fileInputDto: FileInputDto) {
    return this.targetActionsService.importFile(fileInputDto);
  }
}
