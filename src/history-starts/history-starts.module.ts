import { Module } from "@nestjs/common";
import { HistoryStartsService } from "./history-starts.service";
import { HistoryStartsController } from "./history-starts.controller";
import { ModelContentCommonsService } from "../model-content-commons/model-content-commons.service";
import { DatabaseService } from "../database/database.service";

@Module({
  controllers: [HistoryStartsController],
  providers: [HistoryStartsService, ModelContentCommonsService, DatabaseService],
})
export class HistoryStartsModule {}
