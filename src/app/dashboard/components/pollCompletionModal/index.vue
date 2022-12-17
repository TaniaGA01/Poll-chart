<template>
  <div
      class="modal fade"
      id="completionPollModal"
      ref="createAPIKeyModalRef"
      tabindex="-1"
      aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Terminer le sondage</h2>

          <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
        </div>
        <Form class="form" >
          <div class="modal-body py-10 px-lg-17">
            <div
                class="scroll-y me-n7 pe-7"

                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-dependencies="#kt_modal_create_api_key_header"
                data-kt-scroll-wrappers="#kt_modal_create_api_key_scroll"
                data-kt-scroll-offset="300px"
            >
              <div
                  class="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-10 p-6"
              >
                <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                  <inline-svg src="media/icons/duotune/general/gen044.svg" />
                </span>
                <div class="d-flex flex-stack flex-grow-1">
                  <div class="fw-bold">
                    <h4 class="text-gray-800 fw-bolder">Important !</h4>
                    <div class="fs-6 text-gray-600">
                      Vous êtes en train de terminer le sondage test. Une fois le sondage terminé, les participants ne pourront plus voter aux réponses.
                      <br>
                      Si vous êtes sur(e) de vouloir le terminé, merci de choisir la réponse pour envoyer la notification aux participants.                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-5 fv-row">
                <div class="input-group">
                  <select class="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Choisir une reponse" name="target_assign">
                    <option value="">Choisir une reponse</option>
                    <option value="1">Vendredi 18 mars de 10:30 - 11:00</option>
                    <option value="2">Samedi 19 mars de 11:00 - 11:30</option>
                    <option value="3">Dimanche 20 mars de 11:30 - 12:30</option>
                  </select>
                </div>
              </div>
            </div>
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
