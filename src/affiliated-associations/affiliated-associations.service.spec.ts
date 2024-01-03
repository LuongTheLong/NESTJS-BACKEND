import { Test, TestingModule } from "@nestjs/testing";
import { AffiliatedAssociationsService } from "./affiliated-associations.service";

describe("AffiliatedAssociationsService", () => {
  let service: AffiliatedAssociationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AffiliatedAssociationsService],
    }).compile();

    service = module.get<AffiliatedAssociationsService>(AffiliatedAssociationsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
