import { Module } from "@nestjs/common";
import { OrganizationalRulesService } from "./organizational-rules.service";
import { OrganizationalRulesController } from "./organizational-rules.controller";
import { DatabaseService } from "src/database/database.service";
import { ModelContentCommonsService } from "src/model-content-commons/model-content-commons.service";

@Module({
  controllers: [OrganizationalRulesController],
  providers: [OrganizationalRulesService, DatabaseService, ModelContentCommonsService],
})
export class OrganizationalRulesModule {}
