import { createApp } from "vue";
import { VuelidatePlugin } from "@vuelidate/core";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "materialize-css/dist/js/materialize.min";

const app = createApp(App);

app.config.globalProperties.$message = function(html) {
	M.toast({ html });
};

app.config.globalProperties.$error = function(html) {
	M.toast({ html: `[Ошибка]: ${html}` });
};

app
	.use(store)
	.use(router)
	.use(VuelidatePlugin)
	.mount("#app");
