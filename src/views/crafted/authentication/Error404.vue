<template>
  <div class="d-flex flex-column flex-center flex-column-fluid p-10">
    <!--begin::Illustration-->
    <img
      :src="getIllustrationsPath('18.png')"
      alt=""
      class="mw-100 mb-10 h-lg-450px"
    />
    <!--end::Illustration-->

    <!--begin::Message-->
    <h1 class="fw-bold mb-10" style="color: #a3a3c7">
      Il semble qu'il n'y ait rien ici
    </h1>
    <!--end::Message-->

    <!--begin::Link-->
    <router-link to="/information_organisateur" class="btn btn-primary"
      >Retour à l'accueil</router-link
    >
    <!--end::Link-->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "error-404",
  components: {},
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "bg-body");
    });

    onUnmounted(() => {
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "bg-body");
    });

    return {
      getIllustrationsPath,
    };
  },
});
</script>
