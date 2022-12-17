<script setup lang="ts">
    import { reactive } from "vue";
    import { Field, FieldArray } from "vee-validate";
    import GetOptionsServices from "@/app/pollCreation/components/step2/pollOptions/services";
    import FormOptions from "@/app/dashboard/components/pollOptionsModal/services";
    const getOptionsServices = new GetOptionsServices();
    const formOptions = reactive(new FormOptions());
    formOptions.handleStepMeth();

    const props = defineProps({
        getPollInfo: Object
    })

    const emitEditPoll = defineEmits(["editPollMethod", "data"])
    const editPollMethod = (q) => {
        emitEditPoll("editPollMethod", q)
    }
</script>
<template>
    <div class="modal fade" id="pollOptionsModal" ref="createAPIKeyModalRef" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered mw-850px">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Options du sondage</h2>
                    <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                        <span class="svg-icon svg-icon-1">
                            <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                        </span>
                    </div>
                </div>
                <Form class="form">
                    <div class="modal-body py-10 px-lg-17">
                        <div
                            class="scroll-y me-n7 pe-7"
                            data-kt-scroll="true"
                            data-kt-scroll-activate="{default: false, lg: true}"
                            data-kt-scroll-max-height="auto"
                            data-kt-scroll-dependencies="#kt_modal_create_api_key_header"
                            data-kt-scroll-wrappers="#kt_modal_create_api_key_scroll"
                            data-kt-scroll-offset="300px">
                        </div>
                        <div class="mb-10">
                            <div class="fv-row mb-10">
                                <i class="far fa-lightbulb text-primary me-2"></i>
                                <label class="form-label required">Nom du sondage</label>
                                <Field type="text" name="meetingName" class="form-control form-control-lg form-control-solid" :modelValue="props.getPollInfo.name"
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
                                <Field as="textarea" name="meetingDescription" class="form-control form-control-lg form-control-solid" :modelValue="props.getPollInfo.comment"
                                    placeholder="Commentaire" @keydown.enter.prevent />
                                <ErrorMessage name="meetingDescription" class="fv-plugins-message-container invalid-feedback">
                                </ErrorMessage>
                            </div>
                        </div>
                        <FieldArray name="pollOptions" v-slot="{ fields }">
                            <fieldset v-for="(field, idx) in fields" :key="field.key">
                                <template
                                v-if="
                                    field.value._id !== '006' &&
                                    field.value._id !== '007' &&
                                    field.value._id !== '008' &&
                                    field.value._id !== '009'
                                ">
                                    <div class="d-flex flex-stack mt-2 mb-2 form-check form-switch form-check-custom form-check-solid" :id="`div_${idx}`">
                                        <label class="fs-6 fw-bold" :for="`${idx}`">{{ field.value.name }}
                                            <template v-if="(field.value.premium === false)">
                                                <span class="badge-light-warning badge fs-7 fw-bolder">
                                                    Gratuit
                                                </span>
                                            </template>
                                            <template v-else>
                                                <span class="badge-light-info fs-7 badge fs-7 fw-bolder me-1">
                                                    Premium
                                                </span>
                                            </template>
                                        </label>
                                        <Field v-if="idx == 9" :id="`comm_${idx}`" :name="field.value._id" modelValue="false" value="true"
                                            class="form-check-input checkbox-input" type="checkbox"
                                            @click="getOptionsServices.displayCommentOptionContent(idx)" />

                                        <Field v-else-if="idx == 10" :id="`logo_${idx}`" :name="field.value._id" modelValue="false" value="true"
                                            class="form-check-input checkbox-input" type="checkbox"
                                            @click="getOptionsServices.displayLogoOptionContent(idx)" />

                                        <Field v-else-if="idx == 11" :id="`banner_${idx}`" :name="field.value._id" modelValue="false" value="true"
                                            class="form-check-input checkbox-input" type="checkbox"
                                            @click="getOptionsServices.displayBannerOptionContent(idx)" />

                                        <Field v-else :id="`input_${idx}`" :name="field.value._id" modelValue="false" value="true"
                                            class="form-check-input checkbox-input" type="checkbox" />
                                    </div>

                                    <div v-if="getOptionsServices.isDisplayOptionContent() == true && idx == 9">
                                        <div class="commentOptions mb-5 mt-5" :id="`div_${idx}`">
                                            <FieldArray name="optionsComments" v-slot="{ fields }">
                                                <fieldset v-for="(field, idx) in fields" :key="field.key" class="ms-10 me-10">
                                                    <div class="commentOptionsBlock">
                                                        <label class="fs-6 fw-bold" :for="`${idx}`">{{
                                                        field.value.name
                                                        }}</label>
                                                        <Field :id="`checkbox_${idx}`" :name="'option'" modelValue="false" value="true"
                                                            class="form-check-input checkbox-input ms-3" type="checkbox" />
                                                    </div>
                                                </fieldset>
                                            </FieldArray>
                                        </div>
                                    </div>

                                    <div v-if="getOptionsServices.isDisplayLogoContent() == true && idx == 10">
                                        <div class="mb-10 mt-10" :id="`div_${idx}`">
                                            <div class="image-input image-input-outline" data-kt-image-input="false"
                                                style="background-image: url(media/avatars/no-image.png)">
                                                <div class="image-input-wrapper">
                                                    <img v-if="getOptionsServices.isUploadImages().urlLogo.length === 0 || getOptionsServices.isUploadImages().pollLogo.length === 0"
                                                        :src="getOptionsServices.isUploadNoImage()" class="thumbnail_block" />
                                                    <img v-else :src="getOptionsServices.isUploadImages().urlLogo" class="thumbnail_block" />
                                                </div>
                                                <label class=" btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow "
                                                    data-kt-image-input-action="change" title="Ajouter le logo">
                                                    <i class="bi bi-pencil-fill fs-7"></i>

                                                    <Field :id="`logo_${idx}`" ref="logoFileInput" type="file" name="logo" accept=".png, .jpg, .jpeg"
                                                        @change="getOptionsServices.addLogoImg" />
                                                    <Field type="hidden" name="logo_remove" />
                                                </label>
                                                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                                                    data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Supprimer le logo"
                                                    @click="getOptionsServices.removeLogoImg()">
                                                    <i class="bi bi-x fs-2"></i>
                                                </span>
                                            </div>
                                            <div class="form-text">Format: png, jpg, jpeg.</div>
                                        </div>
                                    </div>

                                    <div v-if="getOptionsServices.isDisplayBannerContent() == true && idx == 11">
                                        <div class="mb-10 mt-10" :id="`div_${idx}`">
                                            <div class="image-input image-input-outline" data-kt-image-input="false"
                                                style="background-image: url(media/avatars/no-image.png)">
                                                <div class="image-input-wrapper">
                                                    <img v-if="
                                                        getOptionsServices.isUploadImages().urlBanner.length === 0 ||
                                                        getOptionsServices.isUploadImages().pollBanner.length === 0
                                                    " :src="getOptionsServices.isUploadNoImage()"
                                                        class="thumbnail_block" />
                                                    <img v-else :src="getOptionsServices.isUploadImages().urlBanner" class="thumbnail_block" />
                                                </div>
                                                <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                                                    data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Ajouter le logo">
                                                    <i class="bi bi-pencil-fill fs-7"></i>

                                                    <Field :id="`banner_${idx}`" ref="bannerFileInput" type="file" name="banner" accept=".png, .jpg, .jpeg"
                                                        @change="getOptionsServices.addBannerImg" />

                                                    <Field type="hidden" name="banner_remove" />
                                                </label>
                                                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                                                    data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Supprimer le logo"
                                                    @click="getOptionsServices.removeBannerImg">
                                                    <i class="bi bi-x fs-2"></i>
                                                </span>
                                            </div>
                                            <div class="form-text">Format: png, jpg, jpeg.</div>
                                        </div>
                                    </div>
                                    <hr class="mt-2 mb-2"/>
                                </template>
                            </fieldset>
                        </FieldArray>
                    </div>
                    <div class="modal-footer flex-center">
                        <a class="btn btn-white me-3" data-bs-dismiss="modal">
                            Annuler
                        </a>
                        <a
                        ref="submitButtonRef"
                        type="submit"
                        class="btn btn-primary"
                        @click="formOptions.formSubmit; editPollMethod(props.getPollInfo)"
                        data-bs-dismiss="modal">
                            Modifier
                        </a>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>
