import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import { config } from "aws-sdk";
import { ConfigService } from "@nestjs/config";

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  // enable CORS
  app.enableCors();

  app.use(cookieParser());

  // Swagger OpenAPI config
  const configSwagger = new DocumentBuilder()
    .setTitle("API Swagger 2.0")
    .setDescription("The cats API description")
    .setVersion("2.0")
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup("/swagger", app, document, {
    customCssUrl: "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css",
    customJs: [
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js",
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js",
    ],
  });
  // end region

  // region for aws s3 bucket
  const configService = app.get(ConfigService);
  config.update({
    accessKeyId: configService.get(process.env.AWS_ACCESS_KEY_ID),
    secretAccessKey: configService.get(process.env.AWS_SECRET_ACCESS_KEY),
    region: configService.get(process.env.NEXT_PUBLIC_AWS_REGION),
  });
  // end region
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
