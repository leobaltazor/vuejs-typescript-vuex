<template>
  <div class="list-wrapper">
    <template v-for="task in tasks">
      <TaskComponent :task="task" :key="task.id" :readonly="readonly" />
    </template>
    <InputField v-if="!readonly" v-model="newTask" name="new-task" @add="addNewTask" autofocus/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "@/vue-script";
import { InputField, TaskComponent } from "@/components";
import { Task } from "@/Models";
import { TaskStore } from "@/store/modules";

@Component({
  components: {
    InputField,
    TaskComponent,
  },
})
export default class TaskListComponent extends Vue {
  @Prop({ type: Array, default: [] }) tasks!: Task[];
  @Prop(Boolean) readonly!: boolean;
  newTask = "";
  async addNewTask(): Promise<void> {
    const text = this.newTask.trim();
    if (text.length) {
      const result = await TaskStore.createTask(text);
      if (result) {
        this.newTask = "";
      }
    }
  };
}
</script>

<style lang="scss">
</style>
