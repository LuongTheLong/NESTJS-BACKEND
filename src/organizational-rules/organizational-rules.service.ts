import { Injectable } from "@nestjs/common";
import { CreateOrganizationalRuleDto } from "./dto/create-organizational-rule.dto";
import { UpdateOrganizationalRuleDto } from "./dto/update-organizational-rule.dto";
import { ModelContentCommonsService } from "../model-content-commons/model-content-commons.service";
import { DatabaseService } from "../database/database.service";
import { CreateModelContentCommonDto } from "../model-content-commons/dto/create-model-content-common.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class OrganizationalRulesService {
  constructor(
    private readonly modelContentCommonService: ModelContentCommonsService,
    private readonly databaseService: DatabaseService,
  ) {}
  // async create(createContentCommonDto: CreateModelContentCommonDto) {
  //   const exist = await this.databaseService.organizationalRules.findFirst();

  //   if (!exist) {
  //     const dataCreate = await this.databaseService.organizationalRules.create({
  //       data: {}
  //     });
  //     var createContentCommon = await this.modelContentCommonService.create(createContentCommonDto, dataCreate.id);
  //     return { content: createContentCommon, pageId: dataCreate.id }
  //   }

  //   var createContentCommon = await this.modelContentCommonService.create(createContentCommonDto, exist.id);
  //   return { content: createContentCommon, pageId: exist.id }
  // }

  // async findAll() {
  //   const exist = await this.databaseService.organizationalRules.findFirst();
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

  async importFile(url: string) {
    const exist = await this.databaseService.organizationalRules.findFirst();
    if (exist) {
      exist.file = url;
      await this.databaseService.organizationalRules.update({
        where: {
          id: exist.id,
        },
        data: exist,
      });
      return exist;
    }

    const dataCreate = await this.databaseService.organizationalRules.create({
      data: {
        file: url,
      },
    });
    return dataCreate;
  }
}
