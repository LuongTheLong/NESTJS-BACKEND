import { Test, TestingModule } from "@nestjs/testing";
import { OrganizationalChartsController } from "./organizational-charts.controller";
import { OrganizationalChartsService } from "./organizational-charts.service";

describe("OrganizationalChartsController", () => {
  let controller: OrganizationalChartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationalChartsController],
      providers: [OrganizationalChartsService],
    }).compile();

    controller = module.get<OrganizationalChartsController>(OrganizationalChartsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
