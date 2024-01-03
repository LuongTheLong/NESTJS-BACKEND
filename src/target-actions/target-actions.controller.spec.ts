import { Test, TestingModule } from "@nestjs/testing";
import { TargetActionsController } from "./target-actions.controller";
import { TargetActionsService } from "./target-actions.service";

describe("TargetActionsController", () => {
  let controller: TargetActionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TargetActionsController],
      providers: [TargetActionsService],
    }).compile();

    controller = module.get<TargetActionsController>(TargetActionsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
