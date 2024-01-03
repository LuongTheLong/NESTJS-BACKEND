import { Injectable } from "@nestjs/common";
import { CreateModelContentCommonDto } from "./dto/create-model-content-common.dto";
import { UpdateModelContentCommonDto } from "./dto/update-model-content-common.dto";
import { DatabaseService } from "src/database/database.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class ModelContentCommonsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createModelContentCommonDto: CreateModelContentCommonDto, pageId: string) {
    return await this.databaseService.modelContentCommons.create({
      data: {
        title: createModelContentCommonDto.title,
        content: createModelContentCommonDto.content,
        pageId: pageId,
      },
    });
  }

  async findAll(pageId: string) {
    return await this.databaseService.modelContentCommons.findMany({
      where: {
        pageId: pageId,
      },
    });
  }

  async findOne(id: string) {
    return await this.databaseService.modelContentCommons.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateModelContentCommonDto: Prisma.ModelContentCommonsUpdateInput) {
    return await this.databaseService.modelContentCommons.update({
      where: {
        id,
      },
      data: updateModelContentCommonDto,
    });
  }

  async remove(id: string) {
    return await this.databaseService.modelContentCommons.delete({
      where: {
        id,
      },
    });
  }
}
