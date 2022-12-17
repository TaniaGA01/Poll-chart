<template>
  <!--begin::Menu wrapper-->
  <div
    class="header-menu align-items-top"
    data-kt-drawer="true"
    data-kt-drawer-name="header-menu"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
    data-kt-place="true"
    data-kt-place-mode="prepend"
    data-kt-place-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
  >
    <!--begin::Menu-->
    <div
      class="
        menu
        menu-lg-rounded
        menu-column
        menu-lg-row
        menu-state-bg
        menu-title-gray-700
        menu-state-title-primary
        menu-state-icon-primary
        menu-state-bullet-primary
        menu-arrow-gray-400
        fw-bold
        my-5 my-lg-0
        align-items-stretch
      "
      id="#kt_header_menu"
      data-kt-menu="true"
    >
      <template v-for="(item, i) in DocMenuConfig" :key="i">
        <template v-if="!item.heading">
          <template v-for="(menuItem, j) in item.pages" :key="j">
            <div v-if="menuItem.heading" class="menu-item me-lg-5">
              <router-link
                class="menu-link"
                :to="menuItem.route"
                active-class="active"
              >
                <span class="menu-title">{{
                  translate(menuItem.heading)
                }}</span>
              </router-link>
            </div>
          </template>
        </template>
      </template>

      <!--end::Menu-->
    </div>
    <div class="create-btn">
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-primary btn-sm dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Créer
        </button>
        <ul class="dropdown-menu">
          <li>
            <a
              class="dropdown-item"
              href="#/nouveau-sondage/opinion"
              @click="reloadPage"
              >Sondage d'opinion</a
            >
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a
              class="dropdown-item"
              href="#/nouveau-sondage/reunion"
              @click="reloadPage"
              >Sondage de réunion</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!--end::Menu wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n/index";
import DocMenuConfig from "@/core/config/PrimaryMenuConfig";
import { headerMenuIcons } from "@/core/helpers/config";
import { version } from "@/core/helpers/documentation";

export default defineComponent({
  name: "PrimaryMenu",
  components: {},
  data() {
    return {
      routeParams: this.$route.params.name,
      routeOpinion: "#/nouveau-sondage/opinion",
    };
  },
  created() {
    this.reloadPage;
  },
  methods: {
    reloadPage() {
      window.setInterval("location.reload()", 1000);
    },
  },
  setup() {
    const { t, te } = useI18n();
    const route = useRoute();

    const hasActiveChildren = (match) => {
      return route.path.indexOf(match) !== -1;
    };

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    return {
      hasActiveChildren,
      headerMenuIcons,
      DocMenuConfig,
      translate,
      version,
    };
  },
});
</script>
