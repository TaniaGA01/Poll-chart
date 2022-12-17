import { reactive } from "vue";


export const setDefaultAnswers = (questions: [any], data: any) => {
      questions.forEach(question => {
        // Création _id TEMPORAIRE POUR LE TEST FRONT
        const randomID = (Math.random() + 91 * 5).toString();
        data.getEachUncheckedAnswer = reactive({
            _id: randomID,
            user: data.newParticipant._id,
            question: question._id,
            choice: 0
        })
        data.newParticipant.answers.push(data.getEachUncheckedAnswer)
    });
    return data;
}

export const setUserAnswers = (answers: any,questions : any) => {

    const inputs = document.querySelectorAll(`input[title="0000"]`) as unknown
    const inputsAsObject = Array.prototype.slice.call(inputs)
    // Récupère tous les questions choisies par le participant et reemplacer choice en answers
    inputsAsObject.filter(input => {
        answers.findIndex(answer => {
            if (input.checked === true) {
                if (answer.question === input.id) {
                    return answer.choice = 1
                }
            }
        })
        return input.checked = false
    })

        // ajout de chaque réponse du participant à chaque question du sondage

    answers.forEach(participantAnswers => {
        questions.forEach(question => {
            if (participantAnswers.question === question._id) {
                return question.answers.push(participantAnswers)
            }
        })
    });
    return {questions, answers};
}
