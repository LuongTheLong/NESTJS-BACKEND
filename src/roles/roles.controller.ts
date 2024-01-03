import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { Prisma } from "@prisma/client";
import { ApiTags } from "@nestjs/swagger";

@Controller("roles")
@ApiTags("roles")
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() createRoleDto: Prisma.RolesCreateInput) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateRoleDto: Prisma.RolesUpdateInput) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.rolesService.remove(+id);
  }
}
