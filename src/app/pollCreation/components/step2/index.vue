<script setup lang="ts">
import { Field, ErrorMessage } from "vee-validate";
import OpinionOptions from "@/app/pollCreation/components/step2/pollOptions/index.vue";
</script>

<template>
  <div class="w-100">
    <div class="pb-10 pb-lg-15">
      <h2 class="fw-bolder text-primary">Etape 2 : Options du sondage</h2>
      <div class="text-gray-400 fw-bold fs-6">
        Merci de renseigner le options pour l'organisateur et pour le sondage.
      </div>
      <hr />
    </div>

    <div class="mb-10">
      <div class="fv-row mb-10">
        <i class="fas fa-caret-right me-2"></i>
        <label class="form-label">Date d'expiration du sondage</label>
        <Field
          type="date"
          name="pollDate"
          class="form-control form-control-lg form-control-solid"
          placeholder=""
          @keydown.enter.prevent
        />
        <ErrorMessage
          name="pollDate"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
      </div>
    </div>
    <hr class="mb-10" />
    <div class="mb-10">
      <div class="fv-row mb-10">
        <i class="fas fa-caret-right me-2"></i>
        <label class="form-label">Lieu de la réunion</label>
        <Field
          type="text"
          name="meetingPlace"
          class="form-control form-control-lg form-control-solid"
          placeholder="Lieu de la réunion"
          @keydown.enter.prevent
        />
      </div>
    </div>
    <hr class="mb-10" />
    <OpinionOptions />
  </div>
</template>
