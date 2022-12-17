import { createApp } from "vue";
import App from "./App.vue";

/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
// import router from "@/router/clean";
import router from "@/router/index";
// import router from "@/router/index";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";

//imports for app initialization
import ApiService from "@/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";

// import vee-validate
import { initVeeValidate } from "@/core/plugins/vee-validate";

import "@/core/plugins/prismjs";

const app = createApp(App);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);
app.use(store);
app.use(router);
app.use(ElementPlus);

ApiService.init(app);
initApexCharts(app);
initInlineSvg(app);
initVeeValidate();

app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);

app.use(i18n);

app.mount("#app");
