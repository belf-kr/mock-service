import { WorkTodoType } from "./work-todo.type";

import { RepeatedDaysOfTheWeekType } from "../repeated-days-of-the-week/repeated-days-of-the-week.type";

export class WorkTodoDto implements WorkTodoType {
  id: number;
  recurrintCycleDate: number;
  title: string;
  explanation: string;
  passedDay: number;
  addDate: Date;
  courseId: number;
  courseTitle: string;
  color: string;
  repeatedDaysOfTheWeek?: RepeatedDaysOfTheWeekType[];
}