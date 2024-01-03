import { Test, TestingModule } from "@nestjs/testing";
import { CoreValuesService } from "./core-values.service";

describe("CoreValuesService", () => {
  let service: CoreValuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoreValuesService],
    }).compile();

    service = module.get<CoreValuesService>(CoreValuesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
