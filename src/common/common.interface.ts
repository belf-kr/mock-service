export interface Glass {
  date: number;
  count: number;
}

export interface Todo {
  reminder_id: string;
  reminder_title: string;
  course_title: string;
  color: string;
}

export interface Todos {
  todo_list: Todo[];
}
