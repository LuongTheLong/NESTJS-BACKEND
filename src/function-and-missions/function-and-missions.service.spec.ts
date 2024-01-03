import { Test, TestingModule } from "@nestjs/testing";
import { FunctionAndMissionsService } from "./function-and-missions.service";

describe("FunctionAndMissionsService", () => {
  let service: FunctionAndMissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FunctionAndMissionsService],
    }).compile();

    service = module.get<FunctionAndMissionsService>(FunctionAndMissionsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
