import { Test, TestingModule } from "@nestjs/testing";
import { FatesService } from "./fates.service";

describe("FatesService", () => {
  let service: FatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FatesService],
    }).compile();

    service = module.get<FatesService>(FatesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
