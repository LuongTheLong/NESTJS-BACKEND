import { Module } from "@nestjs/common";
import { VisionsService } from "./visions.service";
import { VisionsController } from "./visions.controller";
import { DatabaseService } from "../database/database.service";
import { ModelContentCommonsService } from "../model-content-commons/model-content-commons.service";

@Module({
  controllers: [VisionsController],
  providers: [VisionsService, DatabaseService, ModelContentCommonsService],
})
export class VisionsModule {}
