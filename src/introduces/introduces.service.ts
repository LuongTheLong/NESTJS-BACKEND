import { ForbiddenException, Injectable } from "@nestjs/common";
import { CreateIntroduceDto } from "./dto/create-introduce.dto";
import { UpdateIntroduceDto } from "./dto/update-introduce.dto";
import { DatabaseService } from "src/database/database.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class IntroducesService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createIntroduceDto: CreateIntroduceDto) {
    const introducesExist = await this.databaseService.introduces.count();

    if (introducesExist > 0) {
      throw new ForbiddenException("Data has been exist, cant create more");
    }

    return this.databaseService.introduces.create({
      data: {
        title: createIntroduceDto.title,
        content: createIntroduceDto.content,
        image: createIntroduceDto.image,
      },
    });
  }

  async findAll() {
    return this.databaseService.introduces.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.introduces.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateIntroduceDto: Prisma.IntroducesUpdateInput) {
    return this.databaseService.introduces.update({
      where: {
        id,
      },
      data: updateIntroduceDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.introduces.delete({
      where: {
        id,
      },
    });
  }
}
