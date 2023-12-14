import { Test, TestingModule } from '@nestjs/testing';
import { TestModulesController } from './test-modules.controller';
import { TestModulesService } from './test-modules.service';

describe('TestModulesController', () => {
  let controller: TestModulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestModulesController],
      providers: [TestModulesService],
    }).compile();

    controller = module.get<TestModulesController>(TestModulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
