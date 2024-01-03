import { Test, TestingModule } from "@nestjs/testing";
import { IntroducesService } from "./introduces.service";

describe("IntroducesService", () => {
  let service: IntroducesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntroducesService],
    }).compile();

    service = module.get<IntroducesService>(IntroducesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
