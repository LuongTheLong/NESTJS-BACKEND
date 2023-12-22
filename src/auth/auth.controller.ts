import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/auth.dto';
import { LoginModelDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('sign-up')
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post('sign-in')
  signIn(@Body() loginModelDto: LoginModelDto, @Req() req, @Res() res) {
    return this.authService.signIn(loginModelDto, req, res);
  }

  @Get('sign-out')
  signOut(@Req() req, @Res() res) {
    return this.authService.signOut(req, res);
  }
}
