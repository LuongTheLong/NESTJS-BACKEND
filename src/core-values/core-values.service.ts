import { Injectable } from "@nestjs/common";
import { CreateCoreValueDto } from "./dto/create-core-value.dto";
import { UpdateCoreValueDto } from "./dto/update-core-value.dto";
import { ModelContentCommonsService } from "src/model-content-commons/model-content-commons.service";
import { DatabaseService } from "src/database/database.service";
import { CreateModelContentCommonDto } from "../model-content-commons/dto/create-model-content-common.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class CoreValuesService {
  constructor(
    private readonly modelContentCommonService: ModelContentCommonsService,
    private readonly databaseService: DatabaseService,
  ) {}
  async create(createContentCommonDto: CreateModelContentCommonDto) {
    const exist = await this.databaseService.coreValues.findFirst();

    if (!exist) {
      const dataCreate = await this.databaseService.coreValues.create({
        data: {},
      });
      var createContentCommon = await this.modelContentCommonService.create(createContentCommonDto, dataCreate.id);
      return { content: createContentCommon, pageId: dataCreate.id };
    }

    var createContentCommon = await this.modelContentCommonService.create(createContentCommonDto, exist.id);
    return { content: createContentCommon, pageId: exist.id };
  }

  async findAll() {
    const exist = await this.databaseService.coreValues.findFirst();
    if (exist) {
      const listData = await this.modelContentCommonService.findAll(exist.id);
      return listData;
    }
    return [];
  }

  async update(id: string, updateContentCommonDto: Prisma.ModelContentCommonsUpdateInput) {
    const dataReturn = await this.modelContentCommonService.update(id, updateContentCommonDto);
    return dataReturn;
  }

  async remove(id: string) {
    return this.modelContentCommonService.remove(id);
  }
}
