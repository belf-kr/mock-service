import { Controller, Get, HttpException } from "@nestjs/common";

import { ColorService } from "./color/color.service";
import { TodoServiceService } from "./todo-service.service";

import { getErrorHttpStatusCode, getErrorMessage } from "src/common/lib/error";

@Controller("todo-service")
export class TodoServiceController {
  private readonly appService: TodoServiceService;
  private readonly colorService: ColorService;

  constructor(appService: TodoServiceService, colorService: ColorService) {
    this.appService = appService;
    this.colorService = colorService;
  }

  @Get("today-todos")
  getTodayTodos() {
    return this.appService.getTodayTodos();
  }

  @Get("glass")
  getPlantingGlass() {
    return this.appService.getPlantingGlass();
  }

  @Get("colors")
  async getAllColors() {
    try {
      // 서비스 결과 저장
      const serviceResult = await this.colorService.getAllColors();

      return Object.assign({
        color_list: serviceResult,
      });
    } catch (error) {
      // 동작에 실패한 경우 Catch 구문에 예외를 넘김
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      // API에 에러를 토스
      throw new HttpException(message, httpStatusCode);
    }
  }
}
