import { Module } from "@nestjs/common";
import { BusinessesService } from "./businesses.service";
import { BusinessesController } from "./businesses.controller";
import { DatabaseService } from "src/database/database.service";
import { AuthService } from "src/auth/auth.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { RolesService } from "src/roles/roles.service";
import { JwtStrategy } from "src/auth/jwt.strategy";

@Module({
  imports: [JwtModule],
  controllers: [BusinessesController],
  providers: [BusinessesService, DatabaseService, AuthService, RolesService, JwtStrategy],
})
export class BusinessesModule {}
