import { createApp } from "vue";
import { VuelidatePlugin } from "@vuelidate/core";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "materialize-css/dist/js/materialize.min";

createApp(App)
	.use(store)
	.use(router)
	.use(VuelidatePlugin)
	.mount("#app");
