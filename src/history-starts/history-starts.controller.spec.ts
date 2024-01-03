import { Test, TestingModule } from "@nestjs/testing";
import { HistoryStartsController } from "./history-starts.controller";
import { HistoryStartsService } from "./history-starts.service";

describe("HistoryStartsController", () => {
  let controller: HistoryStartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoryStartsController],
      providers: [HistoryStartsService],
    }).compile();

    controller = module.get<HistoryStartsController>(HistoryStartsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
