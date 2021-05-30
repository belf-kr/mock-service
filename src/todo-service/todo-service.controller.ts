import { Controller, Get } from "@nestjs/common";

import { TodoServiceService } from "./todo-service.service";

@Controller("todo-service")
export class TodoServiceController {
  private readonly appService: TodoServiceService;

  constructor(appService: TodoServiceService) {
    this.appService = appService;
  }

  @Get("today-todos")
  getTodayTodos() {
    return this.appService.getTodayTodos();
  }

  @Get("glass")
  getPlantingGlass() {
    return this.appService.getPlantingGlass();
  }
}
