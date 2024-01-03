import { Test, TestingModule } from "@nestjs/testing";
import { OrganizationalChartsService } from "./organizational-charts.service";

describe("OrganizationalChartsService", () => {
  let service: OrganizationalChartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizationalChartsService],
    }).compile();

    service = module.get<OrganizationalChartsService>(OrganizationalChartsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
