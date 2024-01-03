import { Injectable } from "@nestjs/common";
import { CreateTargetActionDto } from "./dto/create-target-action.dto";
import { UpdateTargetActionDto } from "./dto/update-target-action.dto";
import { DatabaseService } from "src/database/database.service";
import { ModelContentCommonsService } from "src/model-content-commons/model-content-commons.service";
import { CreateModelContentCommonDto } from "../model-content-commons/dto/create-model-content-common.dto";
import { Prisma } from "@prisma/client";
import { FileInputDto } from "src/common/fileInputOnlyDto";

@Injectable()
export class TargetActionsService {
  constructor(
    private readonly modelContentCommonService: ModelContentCommonsService,
    private readonly databaseService: DatabaseService,
  ) {}
  async create(createContentCommonDto: CreateModelContentCommonDto) {
    const exist = await this.databaseService.targetActions.findFirst();

    if (!exist) {
      const dataCreate = await this.databaseService.targetActions.create({
        data: {},
      });
      var createContentCommon = await this.modelContentCommonService.create(createContentCommonDto, dataCreate.id);
      return { content: createContentCommon, pageId: dataCreate.id };
    }

    var createContentCommon = await this.modelContentCommonService.create(createContentCommonDto, exist.id);
    return { content: createContentCommon, pageId: exist.id };
  }

  async findAll() {
    const exist = await this.databaseService.targetActions.findFirst();
    if (exist) {
      const listData = await this.modelContentCommonService.findAll(exist.id);
      return { listData: listData, file: exist.image };
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

  async importFile(fileInputDto: FileInputDto) {
    const exist = await this.databaseService.targetActions.findFirst();
    if (exist) {
      exist.image = fileInputDto.url;
      await this.databaseService.targetActions.update({
        where: {
          id: exist.id,
        },
        data: exist,
      });
      return exist;
    }

    const dataCreate = await this.databaseService.targetActions.create({
      data: {
        image: fileInputDto.url,
      },
    });
    return dataCreate;
  }
}
