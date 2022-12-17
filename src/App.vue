<template>
  <Suspense>
  <router-view />
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted } from "vue";
// import { useI18n } from "vue-i18n/index";
import { useStore } from "vuex";
import { Mutations } from "@/store/enums/StoreEnums";
import { initializeComponents } from "@/core/plugins/keenthemes";

export default defineComponent({
  name: "app",
  components: { },
  setup() {
    // const { t, te } = useI18n();
    const store = useStore();

    onMounted(() => {
      /**
       * this is to override the layout config using saved data from localStorage
       * remove this to use config only from static config (@/core/config/DefaultLayoutConfig.ts)
       */
      store.commit(Mutations.OVERRIDE_LAYOUT_CONFIG);

      nextTick(() => {
        initializeComponents();
      });
    });
    // const translate = (text) => {
    //   if (te(text)) {
    //     return t(text);
    //   } else {
    //     return text;
    //   }
    // };
    return {
      //   translate,
    };
  },
});
</script>

<style lang="scss">
@import "~bootstrap-icons/font/bootstrap-icons.css";
@import "~apexcharts/dist/apexcharts.css";
@import "~quill/dist/quill.snow.css";
@import "~animate.css";
@import "~sweetalert2/dist/sweetalert2.css";
@import "~nouislider/distribute/nouislider.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~socicon/css/socicon.css";
@import "~line-awesome/dist/line-awesome/css/line-awesome.css";
@import "~dropzone/dist/dropzone.css";
@import "~@vueform/multiselect/themes/default.css";
@import "~prism-themes/themes/prism-shades-of-purple.css";
@import "~element-plus/dist/index.css";

// Main demo style scss
@import "assets/sass/plugins";
@import "assets/sass/style";

// Dark mode demo style scss
//@import "assets/sass/plugins.dark";
//@import "assets/sass/style.dark";

//RTL version styles
//@import "assets/css/style.rtl.css";
h1 {
  text-transform: uppercase;
}
label {
  text-transform: uppercase;
  font-weight: 700 !important;
}
</style>
