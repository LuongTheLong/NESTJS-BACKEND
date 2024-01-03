import { Test, TestingModule } from "@nestjs/testing";
import { ModelContentCommonsController } from "./model-content-commons.controller";
import { ModelContentCommonsService } from "./model-content-commons.service";

describe("ModelContentCommonsController", () => {
  let controller: ModelContentCommonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModelContentCommonsController],
      providers: [ModelContentCommonsService],
    }).compile();

    controller = module.get<ModelContentCommonsController>(ModelContentCommonsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
