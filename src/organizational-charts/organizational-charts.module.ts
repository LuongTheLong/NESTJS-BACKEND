import { Module } from "@nestjs/common";
import { OrganizationalChartsService } from "./organizational-charts.service";
import { OrganizationalChartsController } from "./organizational-charts.controller";
import { DatabaseService } from "src/database/database.service";
import { ModelContentCommonsService } from "src/model-content-commons/model-content-commons.service";

@Module({
  controllers: [OrganizationalChartsController],
  providers: [OrganizationalChartsService, DatabaseService, ModelContentCommonsService],
})
export class OrganizationalChartsModule {}
