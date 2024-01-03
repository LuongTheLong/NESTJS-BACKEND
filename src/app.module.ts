import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { EmployeesModule } from "./employees/employees.module";
import { MulterModule } from "@nestjs/platform-express";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { RolesModule } from "./roles/roles.module";
import { BusinessesModule } from "./businesses/businesses.module";
import { RolesGuard } from "./auth/roles.guard";
import { IntroducesModule } from "./introduces/introduces.module";
import { ModelContentCommonsModule } from "./model-content-commons/model-content-commons.module";
import { HistoryStartsModule } from "./history-starts/history-starts.module";
import { FatesModule } from "./fates/fates.module";
import { VisionsModule } from "./visions/visions.module";
import { CoreValuesModule } from "./core-values/core-values.module";
import { FunctionAndMissionsModule } from "./function-and-missions/function-and-missions.module";
import { TargetActionsModule } from "./target-actions/target-actions.module";
import { OrganizationalChartsModule } from "./organizational-charts/organizational-charts.module";
import { OrganizationalRulesModule } from "./organizational-rules/organizational-rules.module";
import { PartnersModule } from "./partners/partners.module";
import { AffiliatedAssociationsModule } from "./affiliated-associations/affiliated-associations.module";
import { ConfigModule } from "@nestjs/config";
import { S3Module } from "./s3/s3.module";
import { S3Service } from "./s3/s3.service";
import { NewsModule } from "./news/news.module";
import { EventsModule } from "./events/events.module";
@Module({
  imports: [
    DatabaseModule,
    EmployeesModule,
    MulterModule.register({
      dest: "./uploads", // Đường dẫn để lưu trữ tệp tin
    }),
    AuthModule,
    UsersModule,
    RolesModule,
    BusinessesModule,
    IntroducesModule,
    ModelContentCommonsModule,
    HistoryStartsModule,
    FatesModule,
    VisionsModule,
    CoreValuesModule,
    FunctionAndMissionsModule,
    TargetActionsModule,
    OrganizationalChartsModule,
    OrganizationalRulesModule,
    PartnersModule,
    AffiliatedAssociationsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    S3Module,
    NewsModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: "APP_GUARD",
      useClass: RolesGuard,
    },
    S3Service,
  ],
})
export class AppModule {}
