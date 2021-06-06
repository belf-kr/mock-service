import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { TodoServiceModule } from "./todo-service/todo-service.module";

@Module({
  imports: [TodoServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
