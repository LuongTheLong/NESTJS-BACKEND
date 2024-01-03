import { Module } from "@nestjs/common";
import { FatesService } from "./fates.service";
import { FatesController } from "./fates.controller";
import { DatabaseService } from "src/database/database.service";
import { ModelContentCommonsService } from "src/model-content-commons/model-content-commons.service";

@Module({
  controllers: [FatesController],
  providers: [FatesService, DatabaseService, ModelContentCommonsService],
})
export class FatesModule {}
