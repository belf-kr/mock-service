import { Injectable } from "@nestjs/common";
import { randomColor, randomId, randomInt0to10 } from "./common/common.function";
import { IGlass, IGlasses, ITodos } from "./common/common.interface copy";

@Injectable()
export class AppService {
  getGlasses(userId: string): IGlasses {
    console.log(`getGlasses : ${userId}`);
    const result: IGlass[] = [];
    const now = new Date();
    const size = 23 * 7 + (new Date().getDay() + 1);
    for (let index = 0; index < size; index++) {
      const date = new Date();
      const g: IGlass = {
        date: new Date(date.setDate(now.getDate() - index)).getTime(),
        count: randomInt0to10(),
      };
      result.push(g);
    }
    return {
      glass_list: result.reverse(),
    };
  }

  getTodayTodos(userId: string): ITodos {
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
