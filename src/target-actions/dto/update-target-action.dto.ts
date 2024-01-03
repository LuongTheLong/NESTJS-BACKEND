import { PartialType } from "@nestjs/swagger";
import { CreateTargetActionDto } from "./create-target-action.dto";

export class UpdateTargetActionDto extends PartialType(CreateTargetActionDto) {}
