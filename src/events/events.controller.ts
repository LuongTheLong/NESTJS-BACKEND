import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { EventsService } from "./events.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { PaginationInput } from "../common/pagination.dto";
import { Prisma } from "@prisma/client";
import { ApiTags } from "@nestjs/swagger";

@Controller("events")
@ApiTags("events")
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll(@Query() pagination: PaginationInput) {
    return this.eventsService.findAll(pagination);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateEventDto: Prisma.EventsUpdateInput) {
    return this.eventsService.update(id, updateEventDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventsService.remove(id);
  }
}
