import { Injectable } from "@nestjs/common";

export interface HelloRes {
  value1: string;
}

@Injectable()
export class AppService {
  getHello(): HelloRes {
    return {
      value1: "mock 데이터 qa에서 수정",
    };
  }
}
