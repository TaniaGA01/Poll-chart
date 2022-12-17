import { ref } from 'vue';
import { useRouter } from "vue-router";
import VotationTableServices from "@/app/dashboard/views/pollLayout/services"

export default class service {
    newQuestionData = ref();
    votationTableServices = new VotationTableServices(useRouter());
}

