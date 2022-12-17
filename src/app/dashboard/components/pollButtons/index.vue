<script setup lang="ts">
import { useRouter } from "vue-router";
import CompletionPollModal from "@/app/dashboard/components/pollCompletionModal/index.vue";
import PollOptionsModal from "@/app/dashboard/components/pollOptionsModal/index.vue";
import DataPollServices from "@/app/dashboard/views/pollLayout/services";

const dataPollServices = new DataPollServices(useRouter());
await dataPollServices.getPollById();

const pollInfo = dataPollServices.poll;
</script>

<template>
  <div class="row g-5 g-xl-6">
    <div class="col-xl-12">
      <div class="d-flex align-items-center justify-content-end py-1 my-5">
        <div class="me-4">
          <button
            type="button"
            class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder text-uppercase"
            data-bs-toggle="modal"
            data-bs-target="#pollOptionsModal"
            aria-expanded="false"
          >
            <span class="svg-icon svg-icon-2x svg-icon-gray-500">
              <inline-svg src="media/icons/duotune/general/gen019.svg" class="me-1" />
              Options du sondage
            </span>
          </button>
        </div>
        <div class="me-4">
          <a
            href="#"
            class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder text-uppercase"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <span class="svg-icon svg-icon-2x svg-icon-gray-500 me-1">
              <inline-svg src="media/icons/duotune/general/gen005.svg" />
            </span>
            Voir le journal d'activité
          </a>
        </div>
        <div class="me-4">
          <a
            href="#"
            class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder text-uppercase"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <span class="svg-icon svg-icon-2x svg-icon-gray-500 me-1">
              <inline-svg src="media/icons/duotune/files/fil021.svg" />
            </span>
            Exporter les réponses
          </a>
        </div>
        <div class="create-btn">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-danger btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#completionPollModal"
              aria-expanded="false"
            >
              Terminer le sondage
            </button>
          </div>
        </div>
        <div class="create-btn" style="margin-left: 10px">
          <div class="btn-group">
            <a
              :href="`#/sondage-participant/` + pollInfo._id"
              class="btn btn-danger btn-sm"
            >
              Voir la version participants
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PollOptionsModal :getPollInfo="pollInfo" />
  <CompletionPollModal />
</template>
