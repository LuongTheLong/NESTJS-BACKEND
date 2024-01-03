import { PartialType } from "@nestjs/swagger";
import { CreateOrganizationalRuleDto } from "./create-organizational-rule.dto";

export class UpdateOrganizationalRuleDto extends PartialType(CreateOrganizationalRuleDto) {}
