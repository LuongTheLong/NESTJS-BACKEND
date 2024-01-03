import { PartialType } from "@nestjs/swagger";
import { CreateHistoryStartDto } from "./create-history-start.dto";

export class UpdateHistoryStartDto extends PartialType(CreateHistoryStartDto) {}
