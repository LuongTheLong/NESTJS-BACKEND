import { Test, TestingModule } from "@nestjs/testing";
import { IntroducesController } from "./introduces.controller";
import { IntroducesService } from "./introduces.service";

describe("IntroducesController", () => {
  let controller: IntroducesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntroducesController],
      providers: [IntroducesService],
    }).compile();

    controller = module.get<IntroducesController>(IntroducesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
