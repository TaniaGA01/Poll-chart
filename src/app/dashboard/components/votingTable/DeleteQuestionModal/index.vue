<script setup lang="ts">

const props = defineProps({
  deleteQuestion: Array
});

const emitDeleteQuestion = defineEmits(["deleteQuestionMethod", "data"])
const deleteQuestionMethod = (q) => {
  emitDeleteQuestion("deleteQuestionMethod", q)
}
</script>
<template>
  <div class="modal fade" id="deleteQuestionModal" ref="createAPIKeyModalRef" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <div class="modal-content">
        <div class="modal-header" id="kt_modal_create_api_key_header">
          <h2>Supprimer la question</h2>
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
        </div>
        <Form id="kt_modal_create_api_key_form" class="form">
          <div class="modal-body py-10 px-lg-17">
            <div class="scroll-y me-n7 pe-7" id="kt_modal_create_api_key_scroll" data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_create_api_key_header"
              data-kt-scroll-wrappers="#kt_modal_create_api_key_scroll" data-kt-scroll-offset="300px">
              <div class="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-10 p-6">
                <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                  <inline-svg src="media/icons/duotune/general/gen044.svg" />
                </span>
                <div class="d-flex flex-stack flex-grow-1">
                  <div class="fw-bold">
                    <div class="fs-6 text-gray-600">
                      <p>Êtes-vous sûr de vouloir supprimer la question</p>
                      <h2>{{ props.deleteQuestion.name }} ?</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer flex-center">
            <a class="btn btn-white me-3" data-bs-dismiss="modal">
              Fermer
            </a>
            <add-customer-modal @keydown.enter.prevent @click="deleteQuestionMethod(props.deleteQuestion)" class="btn btn-primary" data-bs-dismiss="modal">
              Supprimer
            </add-customer-modal>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>


