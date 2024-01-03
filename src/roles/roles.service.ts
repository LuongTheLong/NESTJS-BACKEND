import { BadRequestException, Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/database/database.service";
// import { CreateRoleDto } from './dto/create-role.dto';
// import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createRoleDto: Prisma.RolesCreateInput) {
    createRoleDto.searchingName = createRoleDto.name.toLowerCase();

    const role = await this.databaseService.roles.findUnique({
      where: {
        searchingName: createRoleDto.searchingName,
      },
    });

    if (role) {
      throw new BadRequestException("Role already exist");
    }

    return this.databaseService.roles.create({
      data: createRoleDto,
    });
  }

  findAll() {
    return this.databaseService.roles.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: Prisma.RolesUpdateInput) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
