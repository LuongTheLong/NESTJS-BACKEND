import { Module } from "@nestjs/common";
import { AffiliatedAssociationsService } from "./affiliated-associations.service";
import { AffiliatedAssociationsController } from "./affiliated-associations.controller";
import { DatabaseService } from "src/database/database.service";

@Module({
  controllers: [AffiliatedAssociationsController],
  providers: [AffiliatedAssociationsService, DatabaseService],
})
export class AffiliatedAssociationsModule {}
