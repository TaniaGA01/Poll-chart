<script setup lang="ts">
import { Field } from "vee-validate";
import EmailsBlock from "@/app/pollCreation/components/step3/pollMailsBlock/index.vue";
import TooltipServices from "@/app/pollCreation/components/step3/services"
const tooltipServices = new TooltipServices();
</script>
<template>
  <div
      class="modal fade"
      id="pollInvitationModal"
      ref="createAPIKeyModalRef"
      tabindex="-1"
      aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Invitez à participer à vos contacts</h2>
          <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
        </div>
        <Form class="form">
          <div class="modal-body py-10 px-lg-17">
            <div class="rounded border-secondary border border-dashed p-6 mb-10">
                <div class="mb-10 text-center">
                    <div class="fv-row mb-10">
                        <h2 class="mt-5">Envoyez le lien du sondage à vous contacts :</h2>
                    </div>
                </div>
                <div class="fv-row">
                    <i class="fas fa-caret-right me-2"></i>
                    <label class="form-label"> Lien vers votre sondage </label>
                </div>
                <div class="input-group">
                    <Field name="pollLink" type="text" :modelValue="tooltipServices.isPollLink()"
                        class="form-control form-control-lg form-control-solid" id="pollLinkId" />

                    <button type="button" class="btn btn-primary clipboardBtn" data-clipboard-target="#pollLinkId"
                        data-bs-placement="bottom" @click="tooltipServices.isShowTooltip()">
                        <i class="bi bi-clipboard"></i>
                    </button>
                </div>
            </div>
            <br />
            <div class="pb-lg-12 d-flex align-items-center">
                <span class="bullet bullet-vertical h-40px"></span>
                <h3 class="text-gray-600 fw-bold ms-2">
                    Partager le lien via l'adresse mail de vos contacts
                    <span class="badge-light-info badge fw-bold me-1"> Premium </span>
                </h3>
            </div>
            <EmailsBlock />
          </div>
          <div class="modal-footer flex-center">
            <button
                ref="submitButtonRef"
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
            >
              Envoyer
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>


