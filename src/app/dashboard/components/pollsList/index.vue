<script setup lang="ts">
import { pollInterface } from '@/services/interfaces/pollInterfaces/poll.interfaces';
import { reactive } from "vue";
import { useRouter } from "vue-router";
import PollService from './service'
const pollService = new PollService(useRouter());
const polls = reactive<pollInterface[]>(await pollService.getPollsList())
</script>

<template>
    <div class="card mb-5 mb-xl-8 shadow">
        <div class="card-header border-0 pt-5 pb-5">
            <div class="card-title align-items-start flex-column">
                <h2 class="card-label fw-bolder fs-1 mb-1">Liste des sondages</h2>
                <span class="text-gray-700 mt-1 fw-bold fs-7">Voici la liste de tous vos sondages. </span>
            </div>
        </div>
        <div class="card-body py-3">
            <div class="table-responsive">
                <table class="table align-middle gs-0 gy-4">
                    <thead class="bg-light">
                        <tr class="fw-bolder text-muted">
                            <th class="ps-4 min-w-325px rounded-start">Nom du sondage</th>
                            <th class="min-w-125px text-center">Type</th>
                            <th class="min-w-125px text-center">Statut</th>
                            <th class="min-w-200px text-center rounded-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="poll in polls" :key="poll._id">
                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="d-flex justify-content-start flex-column ms-4">
                                        <a :href="`#/gestion-sondage/`+ poll._id" class="text-dark fw-bolder text-hover-primary mb-1 fs-4">{{
                                        poll.name }}</a>
                                        <small class="fs-7 text-muted"><i>id: {{ poll._id }}</i></small>
                                        <p class="text-gray-700 fw-bold text-muted d-block fs-7 mb-1">{{
                                        poll.comment}}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="text-center">
                                    <div class="d-flex justify-content-start flex-column">
                                        <span class="text-muted fw-bold text-muted d-block fs-7">{{ poll.type
                                        }}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="text-center">
                                    <div class="d-flex justify-content-start flex-column">
                                        <span v-if="poll.active === false"
                                            class="text-muted fw-bold text-muted d-block fs-7">
                                            Clôturé
                                        </span>
                                        <span v-else class="text-muted fw-bold text-muted d-block fs-7">
                                            Ouvert
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="text-center">
                                <a href="" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                    <span class="svg-icon svg-icon-3">
                                        <inline-svg src="media/icons/duotune/general/gen019.svg" />
                                    </span>
                                </a>
                                <a :href="`#/gestion-sondage/`+ poll._id" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                    <span class="svg-icon svg-icon-3">
                                        <inline-svg src="media/icons/duotune/art/art005.svg" />
                                    </span>
                                </a>
                                <a href="#" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                    <span class="svg-icon svg-icon-3">
                                        <inline-svg src="media/icons/duotune/general/gen027.svg" />
                                    </span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

