import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ModelContentCommonsService } from "./model-content-commons.service";
import { CreateModelContentCommonDto } from "./dto/create-model-content-common.dto";
import { UpdateModelContentCommonDto } from "./dto/update-model-content-common.dto";

@Controller("model-content-commons")
export class ModelContentCommonsController {
  constructor(private readonly modelContentCommonsService: ModelContentCommonsService) {}

  // @Post()
  // create(@Body() createModelContentCommonDto: CreateModelContentCommonDto, pageId: string) {
  //   return this.modelContentCommonsService.create(createModelContentCommonDto, pageId);
  // }

  // @Get()
  // findAll(pageId: string) {
  //   return this.modelContentCommonsService.findAll(pageId);
  // }

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.modelContentCommonsService.findOne(id);
  // }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateModelContentCommonDto: UpdateModelContentCommonDto) {
  //   return this.modelContentCommonsService.update(id, updateModelContentCommonDto);
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.modelContentCommonsService.remove(id);
  // }
}
