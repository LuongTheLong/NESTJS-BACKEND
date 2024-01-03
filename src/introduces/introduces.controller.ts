import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { IntroducesService } from "./introduces.service";
import { CreateIntroduceDto } from "./dto/create-introduce.dto";
import { UpdateIntroduceDto } from "./dto/update-introduce.dto";
import { Prisma } from "@prisma/client";
import { ApiTags } from "@nestjs/swagger";

@Controller("introduces")
@ApiTags("introduces")
export class IntroducesController {
  constructor(private readonly introducesService: IntroducesService) {}

  @Post()
  create(@Body() createIntroduceDto: CreateIntroduceDto) {
    return this.introducesService.create(createIntroduceDto);
  }

  @Get()
  findAll() {
    return this.introducesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.introducesService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateIntroduceDto: Prisma.IntroducesUpdateInput) {
    return this.introducesService.update(id, updateIntroduceDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.introducesService.remove(id);
  }
}
