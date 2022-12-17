<script setup lang="ts">
import { useRouter } from "vue-router";
import DataPollServices from "@/app/dashboard/views/pollLayout/services";

const dataPollServices = new DataPollServices(useRouter());
await dataPollServices.getPollById();
await dataPollServices.getPollQuestions();
await dataPollServices.getPollParticipants();
const dataPoll = dataPollServices.poll;
</script>
<template>
  <div class="card card-px mt-6 mb-10 py-5 shadow">
    <h3 class="mb-5">Comentaires des participants</h3>
    <div
      v-for="participantComment in dataPoll.participantsComments"
      :key="participantComment.id"
    >
      <div class="card-body rounded border-gray-500 border border-dashed my-2">
        <h4 class="text-gray-900 fs-5 fw-bolder">
          {{ participantComment.name }} :
          <span class="fs-6 text-gray-700 fw-normal">{{
            participantComment.comment
          }}</span>
        </h4>
      </div>
    </div>
  </div>
</template>
