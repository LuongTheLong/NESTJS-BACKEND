import { Injectable } from "@nestjs/common";
import { CreateNewsDto } from "./dto/create-news.dto";
import { UpdateNewsDto } from "./dto/update-news.dto";
import { DatabaseService } from "../database/database.service";
import { PaginationInput } from "../common/pagination.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class NewsService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createNewsDto: CreateNewsDto) {
    return this.databaseService.news.create({
      data: {
        title: createNewsDto.title,
        content: createNewsDto.content,
      },
    });
  }

  findAll(pagination: PaginationInput) {
    return this.databaseService.news.findMany({
      skip: (+pagination.page - 1) * +pagination.count,
      take: +pagination.count,
    });
  }

  findOne(id: string) {
    return this.databaseService.news.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: string, updateNewsDto: Prisma.NewsUpdateInput) {
    return this.databaseService.news.update({
      where: {
        id,
      },
      data: updateNewsDto,
    });
  }

  remove(id: string) {
    return this.databaseService.news.delete({
      where: {
        id,
      },
    });
  }
}
