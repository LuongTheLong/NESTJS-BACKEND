import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { VisionsService } from "./visions.service";
import { CreateVisionDto } from "./dto/create-vision.dto";
import { UpdateVisionDto } from "./dto/update-vision.dto";
import { ApiTags } from "@nestjs/swagger";
import { CreateModelContentCommonDto } from "../model-content-commons/dto/create-model-content-common.dto";
import { Prisma } from "@prisma/client";

@Controller("visions")
@ApiTags("visions")
export class VisionsController {
  constructor(private readonly visionsService: VisionsService) {}

  @Post()
  create(@Body() createContentCommonDto: CreateModelContentCommonDto) {
    return this.visionsService.create(createContentCommonDto);
  }

  @Get()
  findAll() {
    return this.visionsService.findAll();
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateModelContentCommonDto: Prisma.ModelContentCommonsUpdateInput) {
    return this.visionsService.update(id, updateModelContentCommonDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.visionsService.remove(id);
  }
}
