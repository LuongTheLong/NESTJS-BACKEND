import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';


@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {

  }

  findAll() {
    return this.databaseService.users.findMany();
  }

  findOne(id: number) {
    return this.databaseService.users.findFirst({
      where: {
        id
      }
    });
  }


  remove(id: number) {
    return this.databaseService.users.delete({
      where: {
        id
      }
    });
  }
}
