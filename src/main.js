import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// element ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import CKEditor from "@ckeditor/ckeditor5-vue";
import axios from "axios";

Vue.use(CKEditor);
Vue.use(ElementUI);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
