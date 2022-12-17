<script setup lang="ts">
import AddQuestionModal from "@/app/dashboard/components/votingTable/AddQuestionModal/index.vue";
import DeleteQuestionModal from "@/app/dashboard/components/votingTable/DeleteQuestionModal/index.vue";
import EditQuestionModal from "@/app/dashboard/components/votingTable/EditQuestionModal/index.vue";
import BodyPollParticipants from '@/app/dashboard/components/votingTable/bodyPollParticipants/index.vue'
import { useRouter } from "vue-router";
import DataPollServices from '@/app/dashboard/views/pollLayout/services'

const dataPollServices = new DataPollServices(useRouter());
await dataPollServices.getPollById()
await dataPollServices.getPollQuestions()
await dataPollServices.getPollParticipants()
const dataPoll = dataPollServices.poll
const data = dataPollServices.data
</script>
<template>
    <div class="card p-10 shadow">
        <div class="qyt_questions mb-10">
            <div class="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                <span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
                    <inline-svg src="media/icons/duotune/coding/cod006.svg" />
                </span>
                <div class="d-flex flex-stack flex-grow-1">
                    <div class="fw-bold">
                        <div class="fs-4 text-primary">
                            Vous avez {{ dataPoll.questions.length }} questions à répondre
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-responsive border-primary">
            <table class="table table_vote">
                <thead>
                    <tr class="fw-bold fs-6 text-gray-800 border-bottom-2 border-white">
                        <th class="add_question_cell bg-white">
                            <button data-bs-toggle="modal" data-bs-target="#addQuestionModal" href="#"
                                class="btn btn-flex btn-primary btn-hover-rise ms-2">
                                <span class="svg-icon svg-icon-primary svg-icon-2x"><svg
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24" />
                                            <circle fill="#ffffff" opacity="0.3" cx="12" cy="12" r="10" />
                                            <path
                                                d="M12,16 C12.5522847,16 13,16.4477153 13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 C11,16.4477153 11.4477153,16 12,16 Z M10.591,14.868 L10.591,13.209 L11.851,13.209 C13.447,13.209 14.602,11.991 14.602,10.395 C14.602,8.799 13.447,7.581 11.851,7.581 C10.234,7.581 9.121,8.799 9.121,10.395 L7.336,10.395 C7.336,7.875 9.31,5.922 11.851,5.922 C14.392,5.922 16.387,7.875 16.387,10.395 C16.387,12.915 14.392,14.868 11.851,14.868 L10.591,14.868 Z"
                                                fill="#ffffff" />
                                        </g>
                                    </svg>
                                </span>
                                <span class="d-flex flex-column align-items-start ms-2">
                                    <span class="fs-3 fw-bolder">Question</span>
                                    <span class="fs-7">Ajouter</span>
                                </span>
                            </button>
                        </th>
                        <th v-for="(question, idxQuestion) in dataPoll.questions" :key="question"
                            class="table_header_cell text-center">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#editQuestionModal"
                                @click="dataPollServices.sendInfoQuestion(question)">
                                <div class="btn btn-icon btn-flex btn-active-light-primary w-30px h-30px">
                                    <span class="svg-icon svg-icon-3 me-1">
                                        <inline-svg src="media/icons/duotune/general/gen055.svg" />
                                    </span>
                                </div>
                            </a>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#deleteQuestionModal"
                                @click="dataPollServices.deleteQuestionButton(question)">
                                <div class="btn btn-icon btn-flex btn-active-light-primary w-30px h-30px">
                                    <span class="svg-icon svg-icon-3 me-1">
                                        <inline-svg src="media/icons/duotune/general/gen027.svg" />
                                    </span>
                                </div>
                            </a>
                            <p :id="`questionId_${idxQuestion}`" class="mb-0 mt-2">
                                {{ question.name }}
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <BodyPollParticipants />

                </tbody>
                <tfoot>
                    <tr>
                        <td class="total_cell bg-white">
                            <h3 class="me-1 ms-1 mb-0">Total</h3>
                        </td>
                        <td v-for="question in dataPoll.questions" :key="question.answers" class="total-answers">
                            <h4 v-if="(question.answers)" class="mb-0" >
                                {{ question.answers.filter(el => el.choice === 1).length }}
                            </h4>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
    <AddQuestionModal @addQuestion="dataPollServices.setAddQuestion" />
    <EditQuestionModal :getInfoQuestion="data.showInfoQ" @editQuestionMethod="dataPollServices.setEditQuestion" />
    <DeleteQuestionModal :deleteQuestion="data.deleteQuestion" @deleteQuestionMethod="dataPollServices.setDeleteQuestion" />
</template>

<style scoped>

table.table.table_vote {
    width: max-content;
}

.table th.table_header_cell {
    max-width: 10rem;
    vertical-align: top;
}
.table th.table_header_cell,
.table th.add_question_cell {
    border-top: 2px solid #f3f3f3;
    border-left: 2px solid #f3f3f3;
    border-right: 2px solid #f3f3f3;
}
th.add_question_cell,
td.total_cell {
    vertical-align: middle;
}

th.add_question_cell,
td.total_cell {
    position: sticky;
    left: 0;
    z-index: 1;
}
td.total-answers {
    text-align: center;
}

td.total_cell {
    text-align: right;
    vertical-align: middle;
}

.table.table_vote tfoot {
    border: 3px solid #f3f3f3;
}
.table tr:last-child, .table th:last-child, .table td:last-child{
    padding-right: 0.75rem;
}
.table tr:first-child, .table th:first-child, .table td:first-child {
    padding-left: 4px;
}
</style>
