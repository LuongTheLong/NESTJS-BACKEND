import { Module } from "@nestjs/common";
import { FatesService } from "./fates.service";
import { FatesController } from "./fates.controller";
import { DatabaseService } from "../database/database.service";
import { ModelContentCommonsService } from "../model-content-commons/model-content-commons.service";

@Module({
  controllers: [FatesController],
  providers: [FatesService, DatabaseService, ModelContentCommonsService],
})
export class FatesModule {}
