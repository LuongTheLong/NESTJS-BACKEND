import { PartialType } from "@nestjs/swagger";
import { CreateFateDto } from "./create-fate.dto";

export class UpdateFateDto extends PartialType(CreateFateDto) {}
