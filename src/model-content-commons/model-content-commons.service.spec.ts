import { Test, TestingModule } from "@nestjs/testing";
import { ModelContentCommonsService } from "./model-content-commons.service";

describe("ModelContentCommonsService", () => {
  let service: ModelContentCommonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModelContentCommonsService],
    }).compile();

    service = module.get<ModelContentCommonsService>(ModelContentCommonsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
