import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { OrganizationalRulesService } from "./organizational-rules.service";
import { CreateOrganizationalRuleDto } from "./dto/create-organizational-rule.dto";
import { UpdateOrganizationalRuleDto } from "./dto/update-organizational-rule.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller("organizational-rules")
@ApiTags("organizational-rules")
export class OrganizationalRulesController {
  constructor(private readonly organizationalRulesService: OrganizationalRulesService) {}

  // @Post()
  // create(@Body() createContentCommonDto: CreateModelContentCommonDto) {
  //   return this.organizationalRulesService.create(createContentCommonDto);
  // }

  // @Get()
  // findAll() {
  //   return this.organizationalRulesService.findAll();
  // }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateModelContentCommonDto: Prisma.ModelContentCommonsUpdateInput) {
  //   return this.organizationalRulesService.update(id, updateModelContentCommonDto);
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.organizationalRulesService.remove(id);
  // }

  @Post("import-file")
  importFile(@Body() url: string) {
    return this.organizationalRulesService.importFile(url);
  }
}
