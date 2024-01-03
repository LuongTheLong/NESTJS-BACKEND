import { PartialType } from "@nestjs/swagger";
import { CreateAffiliatedAssociationDto } from "./create-affiliated-association.dto";

export class UpdateAffiliatedAssociationDto extends PartialType(CreateAffiliatedAssociationDto) {}
