import Vue from "vue";
import Vuex from "vuex";

import { createDecorator, mixins } from "vue-class-component";

import {
  Component,
  Emit,
  Inject,
  InjectReactive,
  Model,
  Prop,
  PropSync,
  Provide,
  ProvideReactive,
  Ref,
  Watch,
} from "vue-property-decorator";

import {
  Action,
  getModule,
  Module,
  Mutation,
  MutationAction,
  VuexModule,
} from "vuex-module-decorators";

import "@/plugins/bootstrap-vue";

export {
  Vuex,
  getModule,
  Module,
  MutationAction,
  VuexModule,
  Mutation,
  Action,
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch,
  createDecorator,
  mixins,
  Ref,
  ProvideReactive,
  PropSync,
  InjectReactive,
};
