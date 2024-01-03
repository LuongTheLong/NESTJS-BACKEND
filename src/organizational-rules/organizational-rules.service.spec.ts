import { Test, TestingModule } from "@nestjs/testing";
import { OrganizationalRulesService } from "./organizational-rules.service";

describe("OrganizationalRulesService", () => {
  let service: OrganizationalRulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizationalRulesService],
    }).compile();

    service = module.get<OrganizationalRulesService>(OrganizationalRulesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
