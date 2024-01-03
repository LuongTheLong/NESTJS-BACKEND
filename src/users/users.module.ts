import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { DatabaseService } from "src/database/database.service";
import { JwtStrategy } from "src/auth/jwt.strategy";

@Module({
  controllers: [UsersController],
  providers: [UsersService, DatabaseService, JwtStrategy],
})
export class UsersModule {}
