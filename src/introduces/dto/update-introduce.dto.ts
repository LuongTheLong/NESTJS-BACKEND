import { PartialType } from "@nestjs/swagger";
import { CreateIntroduceDto } from "./create-introduce.dto";

export class UpdateIntroduceDto extends PartialType(CreateIntroduceDto) {}
