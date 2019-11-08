<template>
  <b-row class="page-wrapper">
    <b-col cols="10">
      <TaskListComponent :tasks="tasks" :readonly="readonly" />
    </b-col>
    <b-col cols="2">
      <b-button block @click="changeMode">{{readonly ? 'View' : 'Edit'}}</b-button>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Vue, Component } from "@/vue-script";
import { Task } from "@/Models";
import { TaskListComponent } from "@/components";
import { TaskStore } from "@/store/modules";

@Component({
  components: {
    TaskListComponent,
  },
})
export default class HomePage extends Vue {
  readonly = false;

  get tasks(): Task[] {
    return TaskStore.storedTasks;
  }

  changeMode(): void {
    this.readonly = !this.readonly;
  }
}

</script>

<style lang="scss">
</style>
