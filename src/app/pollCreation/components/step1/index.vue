<script setup lang="ts">
import { Field, ErrorMessage } from "vee-validate";
import Calendar from "@/app/pollCreation/components/step1/createDatesCalendar/index.vue";
import CreatePollQuestions from "@/app/pollCreation/components/step1/createPollQuestions/index.vue";
import StepOneServices from "./services"
const stepOneServices = new StepOneServices();
</script>
<template>
    <div class="w-100">
        <div class="pb-10 pb-lg-12">
            <h2 class="fs-1 pb-lg-5">Création du sondage <span v-if="stepOneServices.isOpinionBlock()">d'opinion</span>
                <span v-else>de réunion</span>
            </h2>
            <h2 class="fw-bolder text-primary">Etape 1 : Informations principales</h2>
            <div class="text-gray-400 fw-bold fs-6">
                Merci de renseigner toutes les information du sondage.
            </div>
            <hr />
        </div>

        <div class="pb-lg-12 d-flex align-items-center">
            <span class="bullet bullet-vertical h-40px"></span>
            <h3 class="text-gray-600 fw-bold ms-2">Informations de l'organisateur</h3>
        </div>
        <div class="fv-row mb-10">
            <i class="far fa-lightbulb text-primary me-2"></i>
            <label class="form-label required">Nom de l'organisateur</label>
            <Field name="organizerName" ref="organizerName" class="form-control form-control-lg form-control-solid"
                placeholder="Nom de l'organisateur" @keydown.enter.prevent />
            <ErrorMessage name="organizerName" class="fv-plugins-message-container invalid-feedback"></ErrorMessage>
        </div>
        <div class="fv-row mb-10">
            <i class="far fa-lightbulb text-primary me-2"></i>
            <label class="fs-6 form-label">Adresse électronique de l'organisateur</label>
            <Field name="organizerEmail" class="form-control form-control-lg form-control-solid"
                placeholder="Adresse électronique de l'organisateur" @keydown.enter.prevent />
            <ErrorMessage name="organizerEmail" class="fv-plugins-message-container invalid-feedback"></ErrorMessage>
        </div>
        <hr class="mb-10" />
        <div class="pb-lg-12 d-flex align-items-center">
            <span class="bullet bullet-vertical h-40px"></span>
            <h3 class="text-gray-600 fw-bold ms-2">
                Informations du sondage
            </h3>
        </div>
        <div class="mb-10">
            <div class="fv-row mb-10">
                <i class="far fa-lightbulb text-primary me-2"></i>
                <label class="form-label required">Nom du sondage</label>
                <Field type="text" name="meetingName" class="form-control form-control-lg form-control-solid"
                    placeholder="Nom du sondage" @keydown.enter.prevent />
                <ErrorMessage name="meetingName" class="fv-plugins-message-container invalid-feedback"></ErrorMessage>
            </div>
        </div>
        <div class="mb-10">
            <div class="fv-row mb-2">
                <i class="far fa-lightbulb text-primary me-2"></i>
                <label class="form-label">Commentaire</label>
                <div class="form-text">
                    Utilisez ce champ pour ajouter une description de la réunion ou des
                    instruction pour les participants
                </div>
                <Field as="textarea" name="meetingDescription" class="form-control form-control-lg form-control-solid"
                    placeholder="Commentaire" @keydown.enter.prevent />
                <ErrorMessage name="meetingDescription" class="fv-plugins-message-container invalid-feedback">
                </ErrorMessage>
            </div>
        </div>
        <div class="mb-10">
            <div class="fv-row mb-2">
                <i class="far fa-lightbulb text-primary me-2"></i>
                <label class="form-label">Télécharger un document
                    <span class="badge-light-info badge badge fs-7 fw-bolder me-1">
                        PREMIUM
                    </span>
                </label>
                <Field type="file" name="addFile" class="form-control form-control-solid" @keydown.enter.prevent>
                </Field>
                <ErrorMessage name="addFile" class="fv-plugins-message-container invalid-feedback"></ErrorMessage>
            </div>
        </div>
        <CreatePollQuestions v-if="stepOneServices.isOpinionBlock()" />
        <Calendar v-if="stepOneServices.isReunionBlock()" />
    </div>
</template>
