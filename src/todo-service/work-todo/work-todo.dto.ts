import { WorkTodoType } from "./work-todo.type";

import { RepeatedDaysOfTheWeekDto } from "../repeated-days-of-the-week/repeated-days-of-the-week.dto";

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

  repeatedDaysOfTheWeek: RepeatedDaysOfTheWeekDto[];
}
