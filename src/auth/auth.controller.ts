import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { Prisma, STATUS } from "@prisma/client";
import { CreateUserDto } from "./dto/auth.dto";
import { LoginModelDto } from "./dto/login.dto";
import { CreateAdminDto } from "./dto/adminAccountInput";
import { stat } from "fs";

@Controller("auth")
@ApiTags("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("sign-up-admin-account")
  createAccountAdmin(@Body() dto: CreateAdminDto) {
    return this.authService.createAccountAdmin(dto);
  }

  @Post("sign-up")
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post("sign-in")
  signInUser(@Body() loginModelDto: LoginModelDto, @Req() req, @Res() res) {
    return this.authService.signInUser(loginModelDto, req, res);
  }

  @Get("sign-out")
  signOut(@Req() req, @Res() res) {
    return this.authService.signOut(req, res);
  }

  @Post("review-user")
  reviewUser(@Body() id: string, status: STATUS) {
    return this.authService.reviewUser(id, status);
  }

  @Post("review-business")
  reviewBusiness(@Body() id: string, status: STATUS) {
    return this.authService.reviewBusiness(id, status);
  }
}
