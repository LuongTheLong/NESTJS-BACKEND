import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestModulesService } from './test-modules.service';
import { CreateTestModuleDto } from './dto/create-test-module.dto';
import { UpdateTestModuleDto } from './dto/update-test-module.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('test-modules')
@ApiTags('test-modules')
export class TestModulesController {
  constructor(private readonly testModulesService: TestModulesService) {}

  @Post()
  create(@Body() createTestModuleDto: CreateTestModuleDto) {
    return this.testModulesService.create(createTestModuleDto);
  }

  @Get()
  findAll() {
    return this.testModulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testModulesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestModuleDto: UpdateTestModuleDto) {
    return this.testModulesService.update(+id, updateTestModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testModulesService.remove(+id);
  }
}
