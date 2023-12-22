import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DatabaseModule,
    EmployeesModule,
    MulterModule.register({
      dest: './uploads', // Đường dẫn để lưu trữ tệp tin
    }),
    AuthModule, UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
