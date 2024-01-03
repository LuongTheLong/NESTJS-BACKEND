import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { DatabaseService } from "../database/database.service";
import { JwtStrategy } from "../auth/jwt.strategy";

@Module({
  controllers: [UsersController],
  providers: [UsersService, DatabaseService, JwtStrategy],
})
export class UsersModule {}
