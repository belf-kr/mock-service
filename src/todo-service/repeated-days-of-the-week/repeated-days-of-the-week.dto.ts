import { RepeatedDaysOfTheWeekType } from "./repeated-days-of-the-week.type";

export class RepeatedDaysOfTheWeekDto implements RepeatedDaysOfTheWeekType {
  id: number;

  workTodoId: number;

  dayOfTheWeek: number;
}
