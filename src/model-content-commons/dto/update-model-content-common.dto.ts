import { PartialType } from "@nestjs/swagger";
import { CreateModelContentCommonDto } from "./create-model-content-common.dto";

export class UpdateModelContentCommonDto extends PartialType(CreateModelContentCommonDto) {}
