<script setup lang="ts">
import { Field, ErrorMessage, FieldArray } from "vee-validate";
</script>
<template>
    <div class="mb-10">
        <div class="fv-row mb-2">
            <i class="far fa-lightbulb text-primary me-2"></i>
            <label class="form-label">Message</label>
            <Field as="textarea" name="emailMessage" class="form-control form-control-lg form-control-solid" placeholder="Message" />
        </div>
    </div>
    <i class="far fa-lightbulb text-primary me-2"></i>
    <label class="form-label required">Ajouter une adresse mail</label><br />

    <FieldArray name="newAdressesMails" v-slot="{ fields, push, remove }">
        <fieldset class="mt-5" v-for="(field, idx) in fields" :key="field.key">
            <label :for="`name_${idx}`">Adresse mail - {{ idx + 1 }}</label>
            <template class="input-group">
                <Field :id="`name_${idx}`" :name="`newEmailAdresse[${idx}].name`"
                    class="form-control form-control-lg form-control-solid disable-input" />
                <button type="button" @click="remove(idx)" class="btn btn-primary">
                    <i class="bi bi-trash3"></i>
                </button>
            </template>

            <ErrorMessage v-if="!`newEmailAdresse[${idx}].name`.value" :name="`newEmailAdresse[${idx}].name`"
                class="fv-plugins-message-container invalid-feedback" />
        </fieldset>

        <div class="d-flex flex-stack">
            <button class="btn btn-lg btn-light-primary mt-5 btn-sm" type="button">
                Importer des contacts
            </button>
            <button class="btn btn-primary mt-5 btn-sm" type="button" @click="push({ name: `` })">
                Nouvelle adresse mail
            </button>
        </div>
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
