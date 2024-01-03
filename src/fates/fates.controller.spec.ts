import { Test, TestingModule } from "@nestjs/testing";
import { FatesController } from "./fates.controller";
import { FatesService } from "./fates.service";

describe("FatesController", () => {
  let controller: FatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FatesController],
      providers: [FatesService],
    }).compile();

    controller = module.get<FatesController>(FatesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
