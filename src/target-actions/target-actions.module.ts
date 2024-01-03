import { Module } from "@nestjs/common";
import { TargetActionsService } from "./target-actions.service";
import { TargetActionsController } from "./target-actions.controller";
import { ModelContentCommonsService } from "src/model-content-commons/model-content-commons.service";
import { DatabaseService } from "src/database/database.service";

@Module({
  controllers: [TargetActionsController],
  providers: [TargetActionsService, ModelContentCommonsService, DatabaseService],
})
export class TargetActionsModule {}
