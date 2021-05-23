import { Controller, Get, HttpStatus, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { AppService } from "./app.service";
import { version } from "../package.json";
import { IGlasses, ITodos } from "./common/common.interface";
import { IServiceEndpoint } from "./common/common.endpoint.interface";
@Controller()
export class AppController implements IServiceEndpoint {
  constructor(private readonly appService: AppService) {}

  @Get(":userId/today-todos")
  getTodayTodos(@Param("userId") userId: string): Promise<ITodos> {
    return this.appService.getTodayTodos(userId);
  }

  @Get(":userId/glass")
  getPlantingGlass(@Param("userId") userId: string): Promise<IGlasses> {
    return this.appService.getPlantingGlass(userId);
  }

  @Get("ping")
  sendStatusOK(@Res() res: Response): void {
    res.sendStatus(HttpStatus.OK);
  }

  @Get("version")
  getVersion() {
    return version;
  }
}
