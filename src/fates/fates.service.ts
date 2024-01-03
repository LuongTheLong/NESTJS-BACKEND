import { Injectable } from "@nestjs/common";
import { CreateFateDto } from "./dto/create-fate.dto";
import { UpdateFateDto } from "./dto/update-fate.dto";
import { ModelContentCommonsService } from "../model-content-commons/model-content-commons.service";
import { DatabaseService } from "../database/database.service";
import { CreateModelContentCommonDto } from "../model-content-commons/dto/create-model-content-common.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class FatesService {
  constructor(
    private readonly modelContentCommonService: ModelContentCommonsService,
    private readonly databaseService: DatabaseService,
  ) {}
  async create(createContentCommonDto: CreateModelContentCommonDto) {
    const fateIdExist = await this.databaseService.fates.findFirst();

    if (!fateIdExist) {
      const createFate = await this.databaseService.fates.create({
        data: {},
      });
      var createContentCommon = await this.modelContentCommonService.create(createContentCommonDto, createFate.id);
      return { content: createContentCommon, pageId: createFate.id };
    }

    var createContentCommon = await this.modelContentCommonService.create(createContentCommonDto, fateIdExist.id);
    return { content: createContentCommon, pageId: fateIdExist.id };
  }

  async findAll() {
    const fateIdExist = await this.databaseService.fates.findFirst();
    if (fateIdExist) {
      const listData = await this.modelContentCommonService.findAll(fateIdExist.id);
      return listData;
    }
    return [];
  }

  // findOne(id: string) {
  //   return `This action returns a #${id} fate`;
  // }

  async update(id: string, updateContentCommonDto: Prisma.ModelContentCommonsUpdateInput) {
    const dataReturn = await this.modelContentCommonService.update(id, updateContentCommonDto);
    return dataReturn;
  }

  async remove(id: string) {
    return this.modelContentCommonService.remove(id);
  }
}
