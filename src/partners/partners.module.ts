import { Module } from "@nestjs/common";
import { PartnersService } from "./partners.service";
import { PartnersController } from "./partners.controller";
import { DatabaseService } from "../database/database.service";

@Module({
  controllers: [PartnersController],
  providers: [PartnersService, DatabaseService],
})
export class PartnersModule {}
