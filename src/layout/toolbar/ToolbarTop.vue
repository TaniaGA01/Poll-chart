<script setup lang="ts">
import { toolbarWidthFluid } from "@/core/helpers/config";
import { useRouter } from "vue-router";
import PollInvitationModal from "@/app/dashboard/components/pollInvitationModal/index.vue";
import DataPollServices from "@/app/dashboard/views/pollLayout/services";

const dataPollServices = new DataPollServices(useRouter());
await dataPollServices.getPollById();
const dataPollOption = dataPollServices.poll.options;
</script>
<template>
  <div class="toolbar shadow pt-5 pb-5" id="kt_toolbar">
    <div
      id="kt_toolbar_container"
      :class="{
        'container-fluid': toolbarWidthFluid,
        'container-xxl': !toolbarWidthFluid,
      }"
      class="d-flex flex-stack"
    >
      <div
        id="kt_page_title"
        data-kt-swapper="true"
        data-kt-swapper-mode="prepend"
        data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
        class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0"
      >
        <template v-for="option in dataPollOption" :key="option.file">
          <div
            v-if="
              option._id === `011` && option.value === true && option.premium === true
            "
          >
            <img :src="option.file" alt="" srcset="" />
          </div>
        </template>
      </div>

      <div class="d-flex align-items-center py-1">
        <div class="me-4">
          <a
            href="#"
            class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder text-uppercase"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
            data-bs-toggle="modal"
            data-bs-target="#pollInvitationModal"
            aria-expanded="false"
          >
            <span class="svg-icon svg-icon-2x svg-icon-gray-500">
              <inline-svg src="media/icons/duotune/general/gen041.svg" />
            </span>
            <small>Inviter</small>
          </a>
        </div>
        <div class="create-btn">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-primary btn-sm dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Actions
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Dupliquer le sondage</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Imprimer le sondage</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Supprimer le sondage</a></li>
            </ul>
          </div>
        </div>
        <a href="#/gestion-sondage/liste_sondages">
          <span class="svg-icon svg-icon-1 svg-icon-gray-500 h-50px m-lg-2">
            <inline-svg src="media/icons/partager.svg" />
          </span>
        </a>
      </div>
    </div>
  </div>
  <PollInvitationModal />
</template>
<style scoped>
.toolbar {
  position: relative;
  z-index: 1;
}
</style>
