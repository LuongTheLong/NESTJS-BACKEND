import { Injectable } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { DatabaseService } from "src/database/database.service";
import { PaginationInput } from "src/common/pagination.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class EventsService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createEventDto: CreateEventDto) {
    return this.databaseService.events.create({
      data: {
        locationOrganize: createEventDto.locationOrganize,
        unitOrganize: createEventDto.unitOrganize,
        unitAction: createEventDto.unitAction,
        timeStart: createEventDto.timeStart,
        timeEnd: createEventDto.timeEnd,
        content: createEventDto.content,
        invitation: createEventDto.invitation,
        regisJoinIn: createEventDto.regisJoinIn,
        regisSponsor: createEventDto.regisSponsor,
      },
    });
  }

  findAll(pagination: PaginationInput) {
    return this.databaseService.events.findMany({
      skip: (+pagination.page - 1) * +pagination.count,
      take: +pagination.count,
    });
  }

  findOne(id: string) {
    return this.databaseService.events.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: string, updateEventDto: Prisma.EventsUpdateInput) {
    return this.databaseService.events.update({
      where: {
        id,
      },
      data: updateEventDto,
    });
  }

  remove(id: string) {
    return this.databaseService.events.delete({
      where: {
        id,
      },
    });
  }
}
