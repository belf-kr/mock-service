import { Module } from "@nestjs/common";

import { TodoServiceController } from "./todo-service.controller";
import { TodoServiceService } from "./todo-service.service";
import { ColorModule } from "./color/color.module";
import { CourseModule } from "./course/course.module";
import { CourseTagModule } from "./course-tag/course-tag.module";
import { RepeatedDaysOfTheWeekModule } from "./repeated-days-of-the-week/repeated-days-of-the-week.module";
import { TagModule } from "./tag/tag.module";
import { WorkTodoModule } from "./work-todo/work-todo.module";

@Module({
  imports: [ColorModule, CourseModule, CourseTagModule, RepeatedDaysOfTheWeekModule, TagModule, WorkTodoModule],
  controllers: [TodoServiceController],
  providers: [TodoServiceService],
})
export class TodoServiceModule {}
