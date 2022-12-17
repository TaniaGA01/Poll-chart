<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo" />

  <!--begin::Wrapper-->
  <div class="container">
    <div class="content-page mt-10 ms-5 me-5">
      <div class="row">
        <!-- <Wizard :key="$route.fullpath" /> -->
        <router-view />
      </div>
    </div>
  </div>
  <KTScrollTop />
  <!-- <KTDrawerMessenger /> -->
  <KTUserMenu />
  <!-- <KTFooter /> -->

  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch, nextTick } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import HtmlClass from "@/core/services/LayoutService";
import KTScrollTop from "@/layout/extras/ScrollTop.vue";
import KTUserMenu from "@/layout/header/partials/ActivityDrawer.vue";
import KTLoader from "@/components/Loader.vue";
import KTFooter from "@/layout/footer/Footer.vue";
import { Actions } from "@/store/enums/StoreEnums";
import { MenuComponent } from "@/assets/ts/components";
import { removeModalBackdrop } from "@/core/helpers/dom";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import { loaderEnabled, contentWidthFluid, loaderLogo } from "@/core/helpers/config";

export default defineComponent({
  name: "creation-sondage",
  data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
  },
  components: {
    KTScrollTop,
    KTUserMenu,
    KTLoader,
    KTFooter,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    // show page loading
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

    // initialize html element classes
    HtmlClass.init();

    const pageTitle = computed(() => {
      return store.getters.pageTitle;
    });

    onMounted(() => {
      //check if current user is authenticated
      // if (!store.getters.isUserAuthenticated) {
      //   router.push({ name: "sign-in" });
      // }

      nextTick(() => {
        reinitializeComponents();
      });

      // Simulate the delay page loading
      setTimeout(() => {
        // Remove page loader after some time
        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
      }, 500);
    });

    watch(
      () => route.path,
      () => {
        MenuComponent.hideDropdowns(undefined);

        // check if current user is authenticated
        if (!store.getters.isUserAuthenticated) {
          router.push({ name: "sign-in" });
        }

        nextTick(() => {
          reinitializeComponents();
        });
        removeModalBackdrop();
      }
    );

    return {
      loaderEnabled,
      contentWidthFluid,
      loaderLogo,
      pageTitle,
    };
  },
});
</script>
