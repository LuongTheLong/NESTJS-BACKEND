import { Module } from "@nestjs/common";
import { HistoryStartsService } from "./history-starts.service";
import { HistoryStartsController } from "./history-starts.controller";
import { ModelContentCommonsService } from "src/model-content-commons/model-content-commons.service";
import { DatabaseService } from "src/database/database.service";

@Module({
  controllers: [HistoryStartsController],
  providers: [HistoryStartsService, ModelContentCommonsService, DatabaseService],
})
export class HistoryStartsModule {}
