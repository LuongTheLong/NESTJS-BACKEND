import { Module } from "@nestjs/common";
import { FunctionAndMissionsService } from "./function-and-missions.service";
import { FunctionAndMissionsController } from "./function-and-missions.controller";
import { DatabaseService } from "../database/database.service";
import { ModelContentCommonsService } from "../model-content-commons/model-content-commons.service";

@Module({
  controllers: [FunctionAndMissionsController],
  providers: [FunctionAndMissionsService, DatabaseService, ModelContentCommonsService],
})
export class FunctionAndMissionsModule {}
