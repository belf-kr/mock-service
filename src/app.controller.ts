import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("ping")
  sendStatusOK(@Res() res: Response): void {
    res.sendStatus(HttpStatus.OK);
  }

  @Get("version")
  getVersion() {
    return this.appService.getVersion();
  }

  @Get("env")
  getEnv() {
    return this.appService.getEnv();
  }
}
