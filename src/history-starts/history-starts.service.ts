import { Injectable } from "@nestjs/common";
import { CreateHistoryStartDto } from "./dto/create-history-start.dto";
import { UpdateHistoryStartDto } from "./dto/update-history-start.dto";
import { ModelContentCommonsService } from "../model-content-commons/model-content-commons.service";
import { DatabaseService } from "../database/database.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class HistoryStartsService {
  constructor(
    private readonly modelContentCommonService: ModelContentCommonsService,
    private readonly databaseService: DatabaseService,
  ) {}

  async create(createHistoryStartDto: CreateHistoryStartDto) {
    return this.databaseService.historyStarts.create({
      data: {
        year: createHistoryStartDto.year,
        title: createHistoryStartDto.title,
        content: createHistoryStartDto.content,
      },
    });
  }

  async findAll() {
    return this.databaseService.historyStarts.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.historyStarts.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateHistoryStartDto: Prisma.HistoryStartsUpdateInput) {
    return this.databaseService.historyStarts.update({
      where: {
        id,
      },
      data: updateHistoryStartDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.historyStarts.delete({
      where: {
        id,
      },
    });
  }
}
