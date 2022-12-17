import { reactive } from "vue"
import { answerInterfaces } from "../interfaces/pollInterfaces/answer.interfaces"


export const resetParticipant = (routeId: string) => {
    return {
        _id: "",
        name: "",
        email: "",
        poll: routeId,
        answers: reactive<answerInterfaces[]>([])
    }
}
