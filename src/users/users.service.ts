import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { Prisma, Roles } from "@prisma/client";
import { Request } from "express";
import { NotFoundError } from "rxjs";
import { PaginationInput } from "../common/pagination.dto";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(pagination: PaginationInput) {
    return this.databaseService.users.findMany({
      skip: (+pagination.page - 1) * +pagination.count,
      take: +pagination.count,
      include: {
        roles: true,
      },
    });
  }

  async getMyUser(id: string, req?: Request) {
    const user = await this.databaseService.users.findFirst({
      where: {
        id,
      },
      include: {
        roles: true,
      },
    });

    if (!user) {
      throw new NotFoundException();
    }

    const decodedUser = req.user as { id: string; email: string; roles: Roles };
    console.log(decodedUser);
    if (user.id !== decodedUser.id) {
      throw new ForbiddenException();
    }

    delete user.hashedPassword;

    return { user };
  }

  remove(id: string) {
    return this.databaseService.users.delete({
      where: {
        id,
      },
    });
  }

  async updateUser(id: string, updateUserDto: Prisma.UsersUpdateInput) {
    const userFound = await this.getMyUser(id);

    if (!userFound) {
      throw new NotFoundException();
    }

    return await this.databaseService.users.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }
}
