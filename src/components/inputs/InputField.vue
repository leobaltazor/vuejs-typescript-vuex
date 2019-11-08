<template>
  <b-form-group
    class="wrapper-input"
    :label-for="name"
    :state="state"
    :label="label"
    v-bind="$attrs"
  >
    <b-input-group :append="append" :prepend="prepend">
      <slot name="prepend"></slot>
      <b-form-input
        :name="name"
        :id="name"
        :value="value"
        @change.native="change"
        :type="type"
        :state="state === undefined ? validateState(name) : state"
        @input="input"
        :lazy="lazy"
        :readonly="readonly"
        :formatter="formatter"
        :autofocus="autofocus"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :required="required || (validatorObj && validatorObj['required'])"
        @keydown="enter"
      ></b-form-input>
      <slot name="append"></slot>
    </b-input-group>
  </b-form-group>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Model } from "@/vue-script";
import { KEY_CODES } from "@/store/constants";

@Component({})
export default class InputField extends Vue {
  @Prop(String) placeholder!: string;
  @Prop({ type: String, required: true }) name!: string;
  @Prop(String) label!: string;
  @Prop(String) append!: string;
  @Prop(String) prepend!: string;
  @Prop(String) autocomplete!: string;
  @Prop(String) invalidFeedback!: string;
  @Prop(Function) formatter!: () => string;
  @Prop(Object) validatorObj!: object;
  @Prop({ type: String, default: "text" }) type!: string;
  @Prop({ type: [Boolean], default: undefined }) state!: boolean;
  @Prop({ type: [Boolean], default: false }) required!: boolean;
  @Prop({ type: [Boolean], default: false }) lazy!: boolean;
  @Prop({ type: [Boolean], default: false }) autofocus!: boolean;
  @Prop({ type: [Boolean], default: false }) readonly!: boolean;

  @Model("input", { type: [String, Number], default: "" }) value!:
    | string
    | number;

  @Emit() input(e: string) {
    return e;
  }

  enter($event: KeyboardEvent) {
    switch ($event.keyCode) {
      case KEY_CODES.ENTER:
        this.$emit("add");
        break;
      case KEY_CODES.BACKSPACE:
        $event.preventDefault();
        this.$emit("delete");
        break;

      default:
        break;
    }
  }

  validateState(ref: string) {
    if (!this.validatorObj) {
      return null;
    }

    return null;
  }

  @Emit("change") change() {}
}
</script>

<style lang="scss" scoped>
  .wrapper-input {
    position: relative;
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  .feedback {
    position: absolute;
    bottom: -1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-right: 0.5rem;
  }
</style>
