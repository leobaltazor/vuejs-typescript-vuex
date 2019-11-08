import { getModule, VuexModule, Module, Action, Mutation } from "@/vue-script";
import store from "@/store";
import { TaskStoreModule } from "@/Models/store";
import { Task } from "@/Models";

@Module({
  dynamic: true,
  store,
  name: "taskStore",
  namespaced: true,
})
class TaskStore extends VuexModule implements TaskStoreModule {
  tasks: TaskStoreModule["tasks"] = [{ text: "task 1", id: 0 }, { text: "task 2", id: 1 }]

  get storedTasks(): Task[] {
    return this.tasks;
  }

  @Mutation
  addTaskMutation(task: Task): void {
    this.tasks.push(task);
  }

  @Mutation
  deleteTaskMutation(id: Task["id"]): void {
    const idx = this.tasks.findIndex(task => task.id === id);
    if (idx > -1) {
      this.tasks.splice(idx, 1);
    }
  }

  @Action
  async createTask(text: string): Promise<boolean> {
    try {
      const task = { text, id: this.tasks.length };
      this.addTaskMutation(task);
      return true;
    } catch (e) {
      return false;
    }
  }

  @Action
  async deleteTask(id: Task["id"]): Promise<boolean> {
    try {
      this.deleteTaskMutation(id);
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default getModule(TaskStore);
