import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { OrganizationalChartsService } from "./organizational-charts.service";
import { CreateOrganizationalChartDto } from "./dto/create-organizational-chart.dto";
import { UpdateOrganizationalChartDto } from "./dto/update-organizational-chart.dto";
import { CreateModelContentCommonDto } from "../model-content-commons/dto/create-model-content-common.dto";
import { Prisma } from "@prisma/client";
import { ApiTags } from "@nestjs/swagger";
import { FileInputDto } from "../common/fileInputOnlyDto";

@Controller("organizational-charts")
@ApiTags("organizational-charts")
export class OrganizationalChartsController {
  constructor(private readonly organizationalChartsService: OrganizationalChartsService) {}

  // @Post()
  // create(@Body() createContentCommonDto: CreateModelContentCommonDto) {
  //   return this.organizationalChartsService.create(createContentCommonDto);
  // }

  // @Get()
  // findAll() {
  //   return this.organizationalChartsService.findAll();
  // }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateModelContentCommonDto: Prisma.ModelContentCommonsUpdateInput) {
  //   return this.organizationalChartsService.update(id, updateModelContentCommonDto);
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.organizationalChartsService.remove(id);
  // }

  @Post("import-file")
  importFile(@Body() fileInputDto: FileInputDto) {
    return this.organizationalChartsService.importFile(fileInputDto);
  }
}
