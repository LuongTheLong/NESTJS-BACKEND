import { Injectable } from "@nestjs/common";
import { CreateOrganizationalChartDto } from "./dto/create-organizational-chart.dto";
import { UpdateOrganizationalChartDto } from "./dto/update-organizational-chart.dto";
import { ModelContentCommonsService } from "src/model-content-commons/model-content-commons.service";
import { DatabaseService } from "src/database/database.service";
import { CreateModelContentCommonDto } from "src/model-content-commons/dto/create-model-content-common.dto";
import { Prisma } from "@prisma/client";
import { FileInputDto } from "src/common/fileInputOnlyDto";

@Injectable()
export class OrganizationalChartsService {
  constructor(
    private readonly modelContentCommonService: ModelContentCommonsService,
    private readonly databaseService: DatabaseService,
  ) {}

  // async create(createContentCommonDto: CreateModelContentCommonDto) {
  //   const exist = await this.databaseService.organizationalCharts.findFirst();

  //   if (!exist) {
  //     const dataCreate = await this.databaseService.organizationalCharts.create({
  //       data: {}
  //     });
  //     var createContentCommon = await this.modelContentCommonService.create(createContentCommonDto, dataCreate.id);
  //     return { content: createContentCommon, pageId: dataCreate.id }
  //   }

  //   var createContentCommon = await this.modelContentCommonService.create(createContentCommonDto, exist.id);
  //   return { content: createContentCommon, pageId: exist.id }
  // }

  // async findAll() {
  //   const exist = await this.databaseService.organizationalCharts.findFirst();
  //   if (exist) {
  //     const listData = await this.modelContentCommonService.findAll(exist.id);
  //     return listData;
  //   }
  //   return [];
  // }

  // async update(id: string, updateContentCommonDto: Prisma.ModelContentCommonsUpdateInput) {
  //   const dataReturn = await this.modelContentCommonService.update(id, updateContentCommonDto);
  //   return dataReturn;
  // }

  // async remove(id: string) {
  //   return this.modelContentCommonService.remove(id);
  // }

  async importFile(fileInputDto: FileInputDto) {
    const exist = await this.databaseService.organizationalCharts.findFirst();
    if (exist) {
      exist.file = fileInputDto.url;
      await this.databaseService.organizationalCharts.update({
        where: {
          id: exist.id,
        },
        data: exist,
      });
      return exist;
    }

    const dataCreate = await this.databaseService.organizationalCharts.create({
      data: {
        file: fileInputDto.url,
      },
    });
    return dataCreate;
  }
}
