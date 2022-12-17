import { reactive } from "vue";
import { answerInterfaces } from "../interfaces/pollInterfaces/answer.interfaces";


export const getNewUserRandom = (newParticipantName,routeId) => {
// Création _id TEMPORAIRE POUR LE TEST FRONT
    const random1 = (Math.random() + 33 * 2).toString();

    // Nouveau participant
    return reactive({
        // ci-dessous l'id faker
        _id: random1,
        name: newParticipantName,
        email: "",
        poll: routeId as string,
        answers: reactive<answerInterfaces[]>([])
    });
}


