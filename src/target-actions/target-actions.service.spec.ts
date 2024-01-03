import { Test, TestingModule } from "@nestjs/testing";
import { TargetActionsService } from "./target-actions.service";

describe("TargetActionsService", () => {
  let service: TargetActionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TargetActionsService],
    }).compile();

    service = module.get<TargetActionsService>(TargetActionsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
