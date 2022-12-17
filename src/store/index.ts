import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import AuthModule from "@/store/modules/AuthModule";
import BodyModule from "@/store/modules/BodyModule";
import BreadcrumbsModule from "@/store/modules/BreadcrumbsModule";
import ConfigModule from "@/store/modules/ConfigModule";
import PollModule from '@/store/modules/PollModule';

config.rawError = true;

const store = createStore({
  modules: {
    AuthModule,
    BodyModule,
    BreadcrumbsModule,
    ConfigModule,
    PollModule
  },
});

export default store;
