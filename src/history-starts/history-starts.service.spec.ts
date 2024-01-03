import { Test, TestingModule } from "@nestjs/testing";
import { HistoryStartsService } from "./history-starts.service";

describe("HistoryStartsService", () => {
  let service: HistoryStartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoryStartsService],
    }).compile();

    service = module.get<HistoryStartsService>(HistoryStartsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
