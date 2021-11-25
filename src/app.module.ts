import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_INTERCEPTOR } from "@nestjs/core";
import Joi = require("joi");

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import AppConfig from "./config/app.config";
import { LoggingInterceptor } from "./interceptor/logging.interceptor";
import { TodoServiceModule } from "./todo-service/todo-service.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,
      load: [AppConfig],
      // prod 환경의 환경변수는 모두 k8s가 컨트롤
      ignoreEnvFile: process.env.NODE_ENV === "production",
      envFilePath: process.env.NODE_ENV === "development" ? ".env.dev" : "",
      validationSchema: Joi.object({
        SERVER_PORT: Joi.number().default(3000),
      }),
    }),
    TodoServiceModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
