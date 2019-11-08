<template>
  <div>
    <InputField v-if="!readonly" :value="task.text" :name="'id' + task.id.toString()" @delete="onDelete" />
    <div v-else class="task--view" > {{task.text}} </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "@/vue-script";
import { Task } from "@/Models";
import { InputField } from "@/components";
import { TaskStore } from "@/store/modules";

@Component({
  components: {
    InputField,
  },
})
export default class TaskComponent extends Vue {
  @Prop({ required: true }) task!: Task;
  @Prop(Boolean) readonly!: boolean;

  async onDelete(): Promise<void> {
    const result = await TaskStore.deleteTask(this.task.id);
  }
}
</script>

<style lang="scss">
  .task {
    &--view {
      height: calc(1.5em + .75rem + 2px);
      padding: .375rem .75rem;
    }
  }
</style>
