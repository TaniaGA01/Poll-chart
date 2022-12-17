<script setup lang="ts">
import { Field } from "vee-validate";
import EmailsBlock from "@/app/pollCreation/components/step3/pollMailsBlock/index.vue";
import TooltipServices from "@/app/pollCreation/components/step3/services"
const tooltipServices = new TooltipServices();
</script>
<template>
  <!--begin::Modal - Create Api Key-->
  <div
      class="modal fade"
      id="pollModalLink"
      ref="createAPIKeyModalRef"
      tabindex="-1"
      aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2>Lien vers le sondage des participants</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->

        <!--begin::Form-->
        <Form

            class="form"
        >
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->

            <div class="rounded border-secondary border border-dashed p-6 mb-10">
                <div class="mb-10 text-center">
                    <div class="fv-row mb-10">
                        <div class="svg-icon svg-icon-5x d-block d-flex justify-content-center">
                            <div class="">
                                <inline-svg src="media/icons/icons_to_meet/succes.svg" />
                            </div>
                        </div>
                        <h2 class="mt-5">Votre sondage a été bien créé</h2>
                        <h4 class="fw-bolder mb-10">
                            Dès maintenant vous pouvez consulter votre sondage ici
                        </h4>
                        <button class="btn btn-success mb-2 btn-hover-rise">
                            Tableau de bord de votre sondage
                        </button>
                        <p>et aussi envoyer le lien du sondage à vous contacts :</p>
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

            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
                ref="submitButtonRef"
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
            >
              Envoyer
            </button>
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
        </Form>
        <!--end::Form-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - Create Api Key-->
</template>


