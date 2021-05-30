import { Controller, Get } from "@nestjs/common";

import { TodoServiceService } from "./todo-service.service";

@Controller("todo-service")
export class TodoServiceController {
  constructor(private readonly appService: TodoServiceService) {}

  @Get("today-todos")
  getTodayTodos() {
    return this.appService.getTodayTodos();
  }

  @Get("glass")
  getPlantingGlass() {
    return this.appService.getPlantingGlass();
  }
}
