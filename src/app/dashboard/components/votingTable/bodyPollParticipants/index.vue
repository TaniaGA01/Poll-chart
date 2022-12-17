<script setup lang="ts">
import { useRouter } from "vue-router";
import DataPollServices from '@/app/dashboard/views/pollLayout/services'
import DeleteParticipantModal from "@/app/dashboard/components/votingTable/DeleteParticipantModal/index.vue";

const dataPollServices = new DataPollServices(useRouter());
await dataPollServices.getPollById()
await dataPollServices.getPollQuestions()
await dataPollServices.getPollParticipants()
const dataPoll = dataPollServices.poll
const dataUser = dataPollServices.allParticipants
const data = dataPollServices.data
</script>
<template>
    <!-- Edit existing participants -->
    <template v-for="(participant, idxParticipant) in dataUser" :key="participant">
        <template v-if="dataPoll._id === participant.poll">
            <tr>
                <td class="user_cell border-primary">
                    <div class="user_cell_content">
                        <h6 class="me-1 mt-1 ms-1 mb-0">
                            <span class="svg-icon svg-icon-1 svg-icon-gray-700 me-1">
                                <inline-svg src="media/icons/duotune/communication/com006.svg" />
                            </span>
                            {{ participant.name }}
                        </h6>
                        <!-- User's buttons edit / delete -->
                        <div class="btns_block">
                            <a :id="`${idxParticipant}`" @click="dataPollServices.showEditParticipantRow(idxParticipant)">
                                <div class="btn btn-icon btn-flex btn-active-light-primary w-30px h-10px">
                                    <span class="svg-icon svg-icon-3 me-1">
                                        <inline-svg src="media/icons/duotune/general/gen055.svg" />
                                    </span>
                                </div>
                            </a>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#deleteParticipantModal"
                                @click="dataPollServices.deleteParticipantButton(participant)">
                                <div class="btn btn-icon btn-flex btn-active-light-primary w-30px h-10px">
                                    <span class="svg-icon svg-icon-3 me-1">
                                        <inline-svg src="media/icons/duotune/general/gen027.svg" />
                                    </span>
                                </div>
                            </a>
                        </div>
                        <!-- End User's buttons edit / delete -->
                    </div>
                </td>
                <template v-for="answer in participant.answers" :key="answer._id">
                    <td class="no_answer" v-if="answer.choice === 0">
                        <span><i class=" fas fa-times no-check"></i></span>
                    </td>
                    <td class="answer" v-if="answer.choice === 1">
                        <i class="fas fa-check ok_check"></i>
                    </td>
                    <td class="null_answer" v-if="answer.choice === null">
                        <i class="fas fa-question null_check"></i>
                    </td>
                </template>
            </tr>
        </template>
        <!-- Edit user row -->
        <tr :id="`${idxParticipant}`" v-show="data.editInfoParticipant" class="new_Participant_row">
            <td class="new_Participant_cell bg-light-dark">
                <input :value="participant.name" type="text" class="form-control" :placeholder="`Votre nom`"
                    :id="participant.name" @keydown.enter.prevent />
                <small v-show="data.showField" class="error-message">
                    *Champ obligatoire
                </small>
                <div class="add_user_btn mt-1">
                    <a class="btn btn-primary btn-sm"
                        @click="dataPollServices.hiddenEditUserRow(participant,idxParticipant)">
                        Annuler
                    </a>
                    <a class="btn btn-primary btn-sm"
                        @click="dataPollServices.setEditParticipant(participant, idxParticipant)">
                        Modifier
                    </a>
                </div>
            </td>
            <td v-for="answer in participant.answers" :key="answer._id" class="check_newQuestion_cell">
                <div class=" form-check form-check-custom form-check-solid form-check-lg
                                        align-items-center justify-content-center">
                    <input :id="participant._id" v-if="answer.choice === 1" :class="`form-check-input`" type="checkbox"
                        :title="`${answer.question}`" checked />
                    <input :id="participant._id" v-else :class="`form-check-input`" type="checkbox"
                        :title="`${answer.question}`" />
                </div>
            </td>
        </tr>
        <!-- End Edit user row -->
    </template>
    <!-- End Edit existing participants -->

    <!-- Add new user -->
    <tr class="new_Participant_row">
        <td class="new_Participant_cell bg-light-dark">
            <input v-model="data.newParticipant.name" type="text" class="form-control" :placeholder="`Votre nom`"
                @keydown.enter.prevent />
            <small v-if="!data.newParticipant.name" class="error-message">
                *Champ obligatoire
            </small>
            <div class="add_user_btn mt-1">
                <button class="btn btn-primary btn-sm"
                    @click="dataPollServices.setAddParticipant(data.newParticipant.name)">
                    Ajouter
                </button>
            </div>
        </td>
        <td v-for=" (question) in dataPoll.questions" :key="question._id" class="check_newQuestion_cell">
            <div
                class="form-check form-check-custom form-check-solid form-check-lg align-items-center justify-content-center">
                <input :class="`form-check-input`" type="checkbox" title="0000" :id="`${question._id}`" />
            </div>
        </td>
    </tr>
    <DeleteParticipantModal :deleteParticipant="data.deleteParticipant" @deleteParticipantMethod="dataPollServices.setDeleteParticipant" />
    <!-- End Add new user -->
</template>
<style scoped>
.error-message {
    color: indianred;
}
td.no_answer {
    background-color: #ffd9d9;
    text-align: center;
    vertical-align: middle;
    border-left: 3px solid white;
    border-bottom: 3px solid white;
}

td.answer {
    text-align: center;
    vertical-align: middle;
    border-left: 3px solid white;
    border-bottom: 3px solid white;
    background-color: #9cff9c;
}

td.null_answer {
    text-align: center;
    vertical-align: middle;
    border-left: 3px solid white;
    border-bottom: 3px solid white;
    background-color: #d2bfff;
}

td.user_cell,
td.new_Participant_cell {
    width: 5%;
    position: sticky;
    left: 0;
    z-index: 1;
}
.user_cell_content {
    background-color: #dff1ff;
    display: flow-root;
}
td.new_Participant_cell {
    background-color: #eaf7ff;
    border-bottom: 3px solid white;
}
td.user_cell{
    position: sticky;
    left: 0;
    z-index: 1;
}
td.user_cell {
    padding: 0 !important;
    border-bottom: 3px solid white !important;
}
td.new_Participant_cell {
    padding: 0.5rem !important;
    background-color: #eaf7ff;
    border-bottom: 3px solid white;
}
td.check_newQuestion_cell {
    vertical-align: middle;
    border: 3px solid #f3f3f3;
}

.no-check {
    color: red;
    font-size: 2rem;
}

.ok_check {
    color: green;
    font-size: 2rem;
}

.null_check {
    color: rgb(45, 0, 128);
    font-size: 1.6rem;
}

.btns_block {
    text-align: right;
    margin-bottom: 5px;
}

td .add_user_btn {
    display: flex;
    justify-content: space-between;
}

.add_user_btn .btn {
    padding: 1px 5px !important;
}
.table td:last-child {
    padding-right: 0.75rem;
}
</style>
