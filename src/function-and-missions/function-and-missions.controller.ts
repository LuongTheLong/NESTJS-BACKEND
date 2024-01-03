import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { FunctionAndMissionsService } from "./function-and-missions.service";
import { CreateFunctionAndMissionDto } from "./dto/create-function-and-mission.dto";
import { UpdateFunctionAndMissionDto } from "./dto/update-function-and-mission.dto";
import { CreateModelContentCommonDto } from "../model-content-commons/dto/create-model-content-common.dto";
import { Prisma } from "@prisma/client";
import { ApiTags } from "@nestjs/swagger";
import { FileInputDto } from "../common/fileInputOnlyDto";

@Controller("function-and-missions")
@ApiTags("function-and-missions")
export class FunctionAndMissionsController {
  constructor(private readonly functionAndMissionsService: FunctionAndMissionsService) {}

  @Post()
  create(@Body() createContentCommonDto: CreateModelContentCommonDto) {
    return this.functionAndMissionsService.create(createContentCommonDto);
  }

  @Get()
  findAll() {
    return this.functionAndMissionsService.findAll();
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateModelContentCommonDto: Prisma.ModelContentCommonsUpdateInput) {
    return this.functionAndMissionsService.update(id, updateModelContentCommonDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.functionAndMissionsService.remove(id);
  }

  @Post("import-file")
  importFile(@Body() fileInputDto: FileInputDto) {
    return this.functionAndMissionsService.importFile(fileInputDto);
  }
}
