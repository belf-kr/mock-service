import { Injectable } from "@nestjs/common";
import { randomColor, randomId, randomInt0to10 } from "./common/common.function";
import { Glass, Todos } from "./common/common.interface";

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

  getGlasses(userId: string): Glass[] {
    console.log(`getGlasses : ${userId}`);
    const result: Glass[] = [];
    const now = new Date();
    for (let index = 0; index < 24 * 7; index++) {
      const date = new Date();
      const g: Glass = {
        date: new Date(date.setDate(now.getDate() - index)).getTime(),
        count: randomInt0to10(),
      };
      result.push(g);
    }
    return result.reverse();
  }

  getTodayTodos(userId: string): Todos {
    console.log(`getTodayTodos : ${userId}`);
    return {
      todo_list: [
        {
          reminder_id: randomId(),
          reminder_title: "문법 공부1",
          course_title: "영어 공부하기1",
          color: randomColor(),
        },
        {
          reminder_id: randomId(),
          reminder_title: "문법 공부2",
          course_title: "영어 공부하기2",
          color: randomColor(),
        },
        {
          reminder_id: randomId(),
          reminder_title: "문법 공부3",
          course_title: "영어 공부하기3",
          color: randomColor(),
        },
      ],
    };
  }
}
