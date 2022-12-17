<script setup lang="ts">
import { Field, FieldArray } from "vee-validate";
import GetOptionsServices from "./services";

const optionsServices = new GetOptionsServices();
</script>

<template>
  <div class="fv-row">
    <i class="fas fa-caret-right me-2"></i>
    <label class="form-label">Autre options</label>

    <FieldArray name="pollOptions" v-slot="{ fields }">
      <fieldset v-for="(field, idx) in fields" :key="field.key">
        <div class="
            d-flex
            flex-stack
            mb-5
            form-check form-switch form-check-custom form-check-solid
          " :id="`div_${idx}`">
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
            @click="optionsServices.displayCommentOptionContent(idx)" />

          <Field v-else-if="idx == 10" :id="`logo_${idx}`" :name="field.value._id" modelValue="false" value="true"
            class="form-check-input checkbox-input" type="checkbox"
            @click="optionsServices.displayLogoOptionContent(idx)" />

          <Field v-else-if="idx == 11" :id="`banner_${idx}`" :name="field.value._id" modelValue="false" value="true"
            class="form-check-input checkbox-input" type="checkbox"
            @click="optionsServices.displayBannerOptionContent(idx)" />

          <Field v-else :id="`input_${idx}`" :name="field.value._id" modelValue="false" value="true"
            class="form-check-input checkbox-input" type="checkbox" />
        </div>

        <div v-if="optionsServices.isDisplayOptionContent() == true && idx == 9">
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

        <div v-if="optionsServices.isDisplayLogoContent() == true && idx == 10">
          <div class="mb-10 mt-10" :id="`div_${idx}`">
            <div class="image-input image-input-outline" data-kt-image-input="false"
              style="background-image: url(media/avatars/no-image.png)">
              <div class="image-input-wrapper">
                <img v-if="
                  optionsServices.isUploadImages().urlLogo.length === 0 ||
                  optionsServices.isUploadImages().pollLogo.length === 0
                " :src="optionsServices.isUploadNoImage()" class="thumbnail_block" />
                <img v-else :src="optionsServices.isUploadImages().urlLogo" class="thumbnail_block" />
              </div>
              <label class="
                  btn btn-icon btn-circle btn-active-color-primary
                  w-25px
                  h-25px
                  bg-white
                  shadow
                " data-kt-image-input-action="change" title="Ajouter le logo">
                <i class="bi bi-pencil-fill fs-7"></i>

                <Field :id="`logo_${idx}`" ref="logoFileInput" type="file" name="logo" accept=".png, .jpg, .jpeg"
                  @change="optionsServices.addLogoImg" />

                <Field type="hidden" name="logo_remove" />
              </label>
              <span class="
                  btn btn-icon btn-circle btn-active-color-primary
                  w-25px
                  h-25px
                  bg-white
                  shadow
                " data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Supprimer le logo"
                @click="optionsServices.removeLogoImg()">
                <i class="bi bi-x fs-2"></i>
              </span>
            </div>
            <div class="form-text">Format: png, jpg, jpeg.</div>
          </div>
        </div>

        <div v-if="optionsServices.isDisplayBannerContent() == true && idx == 11">
          <div class="mb-10 mt-10" :id="`div_${idx}`">
            <div class="image-input image-input-outline" data-kt-image-input="false"
              style="background-image: url(media/avatars/no-image.png)">
              <div class="image-input-wrapper">
                <img v-if="
                  optionsServices.isUploadImages().urlBanner.length === 0 ||
                  optionsServices.isUploadImages().pollBanner.length === 0
                " :src="optionsServices.isUploadNoImage()" class="thumbnail_block" />
                <img v-else :src="optionsServices.isUploadImages().urlBanner" class="thumbnail_block" />
              </div>
              <label class="
                  btn btn-icon btn-circle btn-active-color-primary
                  w-25px
                  h-25px
                  bg-white
                  shadow
                " data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Ajouter le logo">
                <i class="bi bi-pencil-fill fs-7"></i>

                <Field :id="`banner_${idx}`" ref="bannerFileInput" type="file" name="banner" accept=".png, .jpg, .jpeg"
                  @change="optionsServices.addBannerImg" />

                <Field type="hidden" name="banner_remove" />
              </label>
              <span class="
                  btn btn-icon btn-circle btn-active-color-primary
                  w-25px
                  h-25px
                  bg-white
                  shadow
                " data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Supprimer le logo"
                @click="optionsServices.removeBannerImg">
                <i class="bi bi-x fs-2"></i>
              </span>
            </div>
            <div class="form-text">Format: png, jpg, jpeg.</div>
          </div>
        </div>
        <hr />
      </fieldset>
    </FieldArray>
  </div>
</template>

<style lang="scss">
hr#\31 {
  display: none;
}
.commentOptionsBlock {
  display: flex;
  justify-content: flex-start;
}
.thumbnail_block {
  max-width: 250px;
}
.image-input .image-input-wrapper {
  width: fit-content;
  height: fit-content;
}
</style>
