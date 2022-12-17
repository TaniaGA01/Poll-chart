<script setup lang="ts">
import { useRouter } from "vue-router";
import DataPollServices from "@/app/dashboard/views/pollLayout/services";
import PollButtons from "@/app/dashboard/components/pollButtons/index.vue";

const dataPollServices = new DataPollServices(useRouter());
await dataPollServices.getPollById();
const dataPoll = dataPollServices.poll;
</script>
<template>
  <div class="row g-5 g-xl-6">
    <div class="col-xl-3">
      <div class="card card-xl-stretch p-10 mb-xl-3 shadow">
        <div class="card-body p-0">
          <div class="mb-5">
            <h5
              class="d-flex align-items-center text-dark fw-bolder my-1 fs-5 text-uppercase"
            >
              Bienvenue au sondage de {{ dataPoll.creator }}
            </h5>
          </div>
          <div>
            <span class="svg-icon svg-icon-2x small">
              <inline-svg src="media/icons/duotune/general/gen014.svg" /> Date
              d'expiration :
            </span>
            <p class="ms-9 mb-0">{{ dataPoll.endDate }}</p>
            <p class="ms-9">Fuseau horaire : {{ dataPoll.timezone }}</p>
          </div>
          <div>
            <span class="svg-icon svg-icon-2x small">
              <inline-svg src="media/icons/duotune/general/gen018.svg" /> Lieu de la
              réunion :
            </span>
            <p class="ms-9">{{ dataPoll.place }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-9">
      <div class="card card-xl-stretch mb-xl-9 shadow">
        <div class="card-body p-0">
          <div class="card-px my-10">
            <div>
              <div class="d-flex align-items-center mt-10">
                <div>
                  <h2 class="fs-1 pb-lg-1">{{ dataPoll.name }}</h2>
                  <small class="text-muted"
                    ><i class="fs-7">id: {{ dataPoll._id }}</i></small
                  >
                  <p class="text-gray-700 fs-5 fw-bold pb-lg-5 mt-5">
                    {{ dataPoll.comment }}
                  </p>

                  <button class="btn btn-success btn-sm btn-hover-rise me-5 mb-2">
                    <span class="svg-icon svg-icon-2x">
                      <inline-svg src="media/icons/duotune/files/fil021.svg" />
                      Télécharger le document
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
