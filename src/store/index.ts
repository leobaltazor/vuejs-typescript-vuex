import { Vue, Vuex } from "@/vue-script";
import { RootState } from "@/Models/store";

Vue.use(Vuex);

const store = new Vuex.Store<RootState>({
  strict: process.env.NODE_ENV !== "production",
});

export default store;
