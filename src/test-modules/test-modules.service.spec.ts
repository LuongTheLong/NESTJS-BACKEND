import { Test, TestingModule } from '@nestjs/testing';
import { TestModulesService } from './test-modules.service';

describe('TestModulesService', () => {
  let service: TestModulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestModulesService],
    }).compile();

    service = module.get<TestModulesService>(TestModulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
