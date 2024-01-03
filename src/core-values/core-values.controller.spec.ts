import { Test, TestingModule } from "@nestjs/testing";
import { CoreValuesController } from "./core-values.controller";
import { CoreValuesService } from "./core-values.service";

describe("CoreValuesController", () => {
  let controller: CoreValuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoreValuesController],
      providers: [CoreValuesService],
    }).compile();

    controller = module.get<CoreValuesController>(CoreValuesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
