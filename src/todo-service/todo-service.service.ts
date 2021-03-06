import { Injectable } from "@nestjs/common";

function randomId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function randomInt0to10() {
  return Math.floor(Math.random() * 10);
}

type Glass = {
  date: number;
  count: number;
};
type Glasses = {
  glass_list: Glass[];
};

type Todo = {
  reminder_id: string;
  reminder_title: string;
  course_title: string;
  color: string;
};
type Todos = {
  todo_list: Todo[];
};

@Injectable()
export class TodoServiceService {
  async getPlantingGlass(): Promise<Glasses> {
    const result: Glass[] = [];
    const now = new Date();
    const size = 23 * 7 + (new Date().getDay() + 1);
    for (let index = 0; index < size; index++) {
      const date = new Date();
      const g: Glass = {
        date: new Date(date.setDate(now.getDate() - index)).getTime(),
        count: randomInt0to10(),
      };
      result.push(g);
    }
    return {
      glass_list: result.reverse(),
    };
  }

  async getTodayTodos(): Promise<Todos> {
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
