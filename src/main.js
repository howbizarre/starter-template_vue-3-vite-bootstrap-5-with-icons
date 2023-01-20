import { createApp } from "vue";

import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from "@/App.vue";
import router from "@/router";

const app = createApp(App);

app.use(router);
app.mount("#app");
