import "@babel/polyfill";
import "mutationobserver-shim";
import { Vue } from "@/vue-script";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount("#app");
