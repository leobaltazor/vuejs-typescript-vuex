import { Task } from "./task";

export interface RootState {
  taskStore: TaskStoreModule;
}

export interface TaskStoreModule {
  tasks: Task[];
  storedTasks: Task[];

  // Mutations
  addTaskMutation(task: Task): void;
  deleteTaskMutation(id: Task["id"]): void;

  // Actions
  createTask: (text: string) => Promise<boolean>;
  deleteTask: (id: Task["id"]) => Promise<boolean>;
}
