import { Module } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { RolesController } from "./roles.controller";
import { DatabaseService } from "src/database/database.service";

@Module({
  controllers: [RolesController],
  providers: [RolesService, DatabaseService],
})
export class RolesModule {}
