import { Controller, Get, HttpStatus, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { AppService } from "./app.service";
import { version } from "../package.json";
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("ping")
  sendStatusOK(@Res() res: Response): void {
    res.sendStatus(HttpStatus.OK);
  }

  @Get("version")
  getVersion() {
    return version;
  }

  @Get(":userId/glass")
  getGlasses(@Param() param) {
    return this.appService.getGlasses(param.userId);
  }

  @Get(":userId/today-todos")
  getTodayTodos(@Param() param) {
    return this.appService.getTodayTodos(param.userId);
  }
}
