import { Module } from "@nestjs/common";
import { NewsService } from "./news.service";
import { NewsController } from "./news.controller";
import { DatabaseService } from "../database/database.service";

@Module({
  controllers: [NewsController],
  providers: [NewsService, DatabaseService],
})
export class NewsModule {}
