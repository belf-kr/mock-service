import { Controller, Get, Param } from "@nestjs/common";

import { TodoServiceService } from "./todo-service.service";

@Controller("todo-service")
export class TodoServiceController {
  constructor(private readonly appService: TodoServiceService) {}

  @Get(":userId/today-todos")
  getTodayTodos(@Param("userId") userId: string) {
    return this.appService.getTodayTodos(userId);
  }

  @Get(":userId/glass")
  getPlantingGlass(@Param("userId") userId: string) {
    return this.appService.getPlantingGlass(userId);
  }
}
