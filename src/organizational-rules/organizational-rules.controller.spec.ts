import { Test, TestingModule } from "@nestjs/testing";
import { OrganizationalRulesController } from "./organizational-rules.controller";
import { OrganizationalRulesService } from "./organizational-rules.service";

describe("OrganizationalRulesController", () => {
  let controller: OrganizationalRulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationalRulesController],
      providers: [OrganizationalRulesService],
    }).compile();

    controller = module.get<OrganizationalRulesController>(OrganizationalRulesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
