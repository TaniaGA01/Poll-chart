<script setup lang="ts">
import { Field, ErrorMessage, FieldArray } from "vee-validate";
</script>

<template>
  <i class="far fa-lightbulb text-primary me-2"></i>
  <label class="form-label required">Ajouter des question</label><br />

  <FieldArray name="newQuestions" v-slot="{ fields, push, remove }">
    <fieldset class="mt-5" v-for="(field, idx) in fields" :key="field.key">
      <label :for="`name_${idx}`">Question - {{ idx + 1 }}</label>
      <template class="input-group">
        <Field
          :id="`name_${idx}`"
          :name="`newQuestions[${idx}].name`"
          class="form-control form-control-lg form-control-solid disable-input"
          @keydown.enter.prevent
        />
        <button type="button" @click="remove(idx)" class="btn btn-primary">
          <i class="bi bi-trash3"></i>
        </button>
      </template>

      <ErrorMessage
        v-if="!`newQuestions[${idx}].name`.value"
        :name="`newQuestions[${idx}].name`"
        class="fv-plugins-message-container invalid-feedback"
      />
    </fieldset>

    <button
      class="btn btn-primary mt-5"
      type="button"
      @click="push({ name: '' })"
    >
      Nouvelle question
    </button>
  </FieldArray>
</template>

<style>
button {
  display: block;
}

button[type="submit"] {
  margin-top: 10px;
}

form + form {
  margin-top: 20px;
}
</style>
