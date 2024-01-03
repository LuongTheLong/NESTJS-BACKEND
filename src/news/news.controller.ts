import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { NewsService } from "./news.service";
import { CreateNewsDto } from "./dto/create-news.dto";
import { UpdateNewsDto } from "./dto/update-news.dto";
import { PaginationInput } from "src/common/pagination.dto";
import { Prisma } from "@prisma/client";
import { ApiTags } from "@nestjs/swagger";

@Controller("news")
@ApiTags("news")
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  findAll(@Query() pagination: PaginationInput) {
    return this.newsService.findAll(pagination);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.newsService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateNewsDto: Prisma.NewsUpdateInput) {
    return this.newsService.update(id, updateNewsDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.newsService.remove(id);
  }
}
