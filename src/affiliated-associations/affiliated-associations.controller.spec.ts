import { Test, TestingModule } from "@nestjs/testing";
import { AffiliatedAssociationsController } from "./affiliated-associations.controller";
import { AffiliatedAssociationsService } from "./affiliated-associations.service";

describe("AffiliatedAssociationsController", () => {
  let controller: AffiliatedAssociationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AffiliatedAssociationsController],
      providers: [AffiliatedAssociationsService],
    }).compile();

    controller = module.get<AffiliatedAssociationsController>(AffiliatedAssociationsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
