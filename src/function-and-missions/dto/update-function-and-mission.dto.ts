import { PartialType } from "@nestjs/swagger";
import { CreateFunctionAndMissionDto } from "./create-function-and-mission.dto";

export class UpdateFunctionAndMissionDto extends PartialType(CreateFunctionAndMissionDto) {}
