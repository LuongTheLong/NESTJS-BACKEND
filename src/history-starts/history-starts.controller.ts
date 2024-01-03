import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { HistoryStartsService } from "./history-starts.service";
import { CreateHistoryStartDto } from "./dto/create-history-start.dto";
import { UpdateHistoryStartDto } from "./dto/update-history-start.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller("history-starts")
@ApiTags("history-starts")
export class HistoryStartsController {
  constructor(private readonly historyStartsService: HistoryStartsService) {}

  @Post()
  create(@Body() createHistoryStartDto: CreateHistoryStartDto) {
    return this.historyStartsService.create(createHistoryStartDto);
  }

  @Get()
  findAll() {
    return this.historyStartsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.historyStartsService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateHistoryStartDto: UpdateHistoryStartDto) {
    return this.historyStartsService.update(id, updateHistoryStartDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.historyStartsService.remove(id);
  }
}
