import { Module } from '@nestjs/common';
import { TestModulesService } from './test-modules.service';
import { TestModulesController } from './test-modules.controller';

@Module({
  controllers: [TestModulesController],
  providers: [TestModulesService],
})
export class TestModulesModule {}
