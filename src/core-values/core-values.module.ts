import { Module } from "@nestjs/common";
import { CoreValuesService } from "./core-values.service";
import { CoreValuesController } from "./core-values.controller";
import { DatabaseService } from "../database/database.service";
import { ModelContentCommonsService } from "../model-content-commons/model-content-commons.service";

@Module({
  controllers: [CoreValuesController],
  providers: [CoreValuesService, DatabaseService, ModelContentCommonsService],
})
export class CoreValuesModule {}
