import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import JwtService from "@/core/services/JwtService";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "creation-sondage",
    redirect: "/sondage-participant/626bfadff9b23b69c8daad15",
    component: () => import("@/layout/LayoutFront.vue")
  },
  {
    path: "/sondage-participant",
    name: "sondage_participant",
    component: () => import("@/layout/LayoutFront.vue"),
    children: [
        {
            path: ":_id",
            component: () => import("@/app/dashboard/views/pollLayout/pollLayout.vue"),
        }
    ],
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  // reset config to initial state
  // store.commit(Mutations.RESET_LAYOUT_CONFIG);

  // store.dispatch(Actions.VERIFY_AUTH, { api_token: JwtService.getToken() });

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
