import { PartialType } from "@nestjs/swagger";
import { CreateOrganizationalChartDto } from "./create-organizational-chart.dto";

export class UpdateOrganizationalChartDto extends PartialType(CreateOrganizationalChartDto) {}
