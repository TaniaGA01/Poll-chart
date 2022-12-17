<script setup lang="ts">
import { Field, ErrorMessage, FieldArray } from "vee-validate";
import FullCalendar from "@fullcalendar/vue3";
import CalendarOptionsServices from "./services"

const calendarOptionsServices = new CalendarOptionsServices();
</script>
<template>
    <div class="fv-row mb-10">
        <i class="far fa-lightbulb text-primary me-2"></i>
        <label class="form-label required">Choix des créneaux horaires</label>

        <FullCalendar class="mt-10 mb-10" :options="calendarOptionsServices.isCalendarOptions()" />

        {{ calendarOptionsServices.calendarOptions.events }}
        <FieldArray name="allEvents">
            <fieldset class="mt-5" v-for="(field, idx) in calendarOptionsServices.calendarOptions.events.slice(1)"
                :key="idx">
                <label :for="`idEvent_${idx}`">Date - {{ field.start }}</label>
                <template class="input-group">
                    <Field :id="`idEvent_${idx}`" :name="`allEvents[${idx}].idEvent`"
                        :modelValue="field.start + ` - ` + field.end" class="
                        form-control form-control-lg form-control-solid
                        disable-input
                    " />
                    <button type="button" @click="calendarOptionsServices.deleteNewEvent(idx)" class="btn btn-primary">
                        <i class="bi bi-trash3"></i>
                    </button>
                </template>

                <ErrorMessage v-if="!`allEvents[${idx}].start`.value" :name="`allEvents[${idx}].idEvent`"
                    class="fv-plugins-message-container invalid-feedback" />
            </fieldset>
        </FieldArray>
    </div>
</template>
<style lang="scss">
.fc-day-past {
  background-color: rgb(233, 233, 233);
}
</style>
