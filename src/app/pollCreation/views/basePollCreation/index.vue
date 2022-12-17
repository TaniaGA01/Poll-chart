<script setup lang="ts">
import Step1 from "@/app/pollCreation/components/step1/index.vue";
import Step2 from "@/app/pollCreation/components/step2/index.vue";
import Step3 from "@/app/pollCreation/components/step3/index.vue";
import WizardServices from "./services";
const wizardServices = new WizardServices();
wizardServices.handleStepMeth();
const horizontalWizardRef = wizardServices.horizontalWizardRef;
const handleStep = wizardServices.handleStep;
const currentStepIndex = wizardServices.currentStepIndex;
const totalSteps = wizardServices.totalSteps;
const previousStep = wizardServices.previousStep;
</script>

<template>
    <div class="card shadow mb-10">
        <div class="card-body">
            <div class="stepper stepper-links d-flex flex-column" id="kt_create_pool_stepper" ref="horizontalWizardRef">

                <div class="stepper-nav py-5 mt-5">
                    <div class="stepper-item current" data-kt-stepper-element="nav">
                        <div class="
                svg-icon svg-icon-3x
                d-block
                my-2
                d-flex
                justify-content-center
              ">
                            <div class="wizzard-cercle">
                                <inline-svg src="media/icons/duotune/communication/Infos-gen-sondage-f.svg" />
                            </div>
                        </div>
                        <h3 class="stepper-title mt-5">Informations principales</h3>
                    </div>
                    <div class="stepper-item" data-kt-stepper-element="nav">
                        <div class="
                svg-icon svg-icon-3x
                d-block
                my-2
                d-flex
                justify-content-center
              ">
                            <div class="wizzard-cercle">
                                <inline-svg src="media/icons/duotune/communication/options-sondage.svg" />
                            </div>
                        </div>
                        <h3 class="stepper-title mt-5">Options du sondage</h3>
                    </div>
                    <div class="stepper-item" data-kt-stepper-element="nav">
                        <div class="
                svg-icon svg-icon-3x
                d-block
                my-2
                d-flex
                justify-content-center
              ">
                            <div class="wizzard-cercle">
                                <inline-svg src="media/icons/duotune/communication/lien-sondage.svg" />
                            </div>
                        </div>
                        <h3 class="stepper-title mt-5">Lien vers le sondage</h3>
                    </div>
                </div>
                <Form class="mx-auto mw-700px w-100 pt-15 pb-10" novalidate="novalidate" id="kt_create_account_form"
                    @submit="handleStep">
                    <div class="current" data-kt-stepper-element="content">
                        <Step1></Step1>
                    </div>
                    <div data-kt-stepper-element="content">
                        <Step2></Step2>
                    </div>
                    <div data-kt-stepper-element="content">
                        <Step3></Step3>
                    </div>



                    <div class="d-flex flex-stack pt-15">
                        <div class="mr-2">
                            <button v-if="currentStepIndex === totalSteps - 2" type="button"
                                class="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous"
                                @click="previousStep">
                                <span class="svg-icon svg-icon-4 me-1">
                                    <inline-svg src="media/icons/duotune/arrows/arr063.svg" />
                                </span>
                                Retourner
                            </button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-lg btn-primary btn-hover-rise me-3"
                                v-if="currentStepIndex === totalSteps - 2" @click="wizardServices.formSubmit()">
                                <span class="indicator-label">
                                    Envoyer
                                    <span class="svg-icon svg-icon-3 ms-2 me-0">
                                        <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
                                    </span>
                                </span>
                                <span class="indicator-progress">
                                    Merci de patienter...
                                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                            </button>

                            <button v-if="currentStepIndex === totalSteps - 3" type="submit"
                                class="btn btn-lg btn-primary btn-hover-rise">
                                Continuer
                                <span class="svg-icon svg-icon-4 ms-1 me-0">
                                    <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
                                </span>
                            </button>
                            <button v-if="currentStepIndex === totalSteps - 1" type="submit"
                                class="btn btn-lg btn-primary btn-hover-rise" @click="wizardServices.emailSubmit()">
                                Envoyer le sondage aux participants
                                <span class="svg-icon svg-icon-4 ms-1 me-0">
                                    <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
                                </span>
                            </button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>



<style scoped>
h2 {
  text-transform: uppercase;
}
.wizzard-cercle {
  background-color: white;
  padding: 20px;
  width: fit-content;
  border-radius: 4rem;
  border: 1px dashed rgb(218, 218, 218);
}
.stepper-item {
  width: 20%;
  text-align: center;
}
</style>
