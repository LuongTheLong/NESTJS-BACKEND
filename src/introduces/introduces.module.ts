import { Module } from "@nestjs/common";
import { IntroducesService } from "./introduces.service";
import { IntroducesController } from "./introduces.controller";
import { DatabaseService } from "src/database/database.service";

@Module({
  controllers: [IntroducesController],
  providers: [IntroducesService, DatabaseService],
})
export class IntroducesModule {}
