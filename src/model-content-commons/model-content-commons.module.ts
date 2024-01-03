import { Module } from "@nestjs/common";
import { ModelContentCommonsService } from "./model-content-commons.service";
import { ModelContentCommonsController } from "./model-content-commons.controller";
import { DatabaseService } from "../database/database.service";

@Module({
  controllers: [ModelContentCommonsController],
  providers: [ModelContentCommonsService, DatabaseService],
})
export class ModelContentCommonsModule {}
