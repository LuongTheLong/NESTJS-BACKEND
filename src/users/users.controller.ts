import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt.guard";
import { Prisma } from "@prisma/client";
import { PaginationInput } from "../common/pagination.dto";
// import { PermissionsGuard } from 'src/auth/permissions.guard';

@Controller("users")
@ApiTags("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @UseGuards(JwtAuthGuard)
  // @UseGuards(PermissionsGuard)
  @Get("profile")
  findAll(@Query() paginationInput: PaginationInput) {
    return this.usersService.findAll(paginationInput);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile/:id")
  getMyUser(@Param("id") id: string, @Req() req) {
    return this.usersService.getMyUser(id, req);
  }

  @UseGuards(JwtAuthGuard)
  @Patch("profile/:id")
  updateUser(@Param("id") id: string, @Body() updateUserDto: Prisma.UsersUpdateInput) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete("profile/:id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(id);
  }
}
