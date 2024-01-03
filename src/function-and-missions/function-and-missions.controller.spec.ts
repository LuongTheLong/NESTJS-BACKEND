import { Test, TestingModule } from "@nestjs/testing";
import { FunctionAndMissionsController } from "./function-and-missions.controller";
import { FunctionAndMissionsService } from "./function-and-missions.service";

describe("FunctionAndMissionsController", () => {
  let controller: FunctionAndMissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FunctionAndMissionsController],
      providers: [FunctionAndMissionsService],
    }).compile();

    controller = module.get<FunctionAndMissionsController>(FunctionAndMissionsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
