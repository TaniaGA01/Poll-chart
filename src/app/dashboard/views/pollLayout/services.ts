import { Router, useRoute } from 'vue-router';
import { reactive } from 'vue';
import * as PollsAPI from '@/services/helper/poll.helper';
import { pollInterface, pollTableInterface } from '@/services/interfaces/pollInterfaces/poll.interfaces'
import * as QuestionAPI from '@/services/api/questions';
import { questionInterface } from '@/services/interfaces/pollInterfaces/question.interfaces';
import * as ParticipantsAPI from '@/services/api/participants';
import { userInterface } from '@/services/interfaces/pollInterfaces/user.interfaces';
import { answerInterfaces } from '@/services/interfaces/pollInterfaces/answer.interfaces'
import { getNewUserRandom } from '@/services/fakers/userFaker';
import { setDefaultAnswers, setUserAnswers } from '@/services/helper/answers.helper';
import { resetParticipant } from '@/services/helper/participant.helper';

export default class service {

    router: Router
    route = useRoute()

    constructor(router: Router) {
        this.router = router;
    }

    data = reactive<pollTableInterface>({
        newParticipant: {},
        deleteQuestion: [],
        deleteParticipant: [],
        getPollParticipants:[],
        showField: false,
        editInfoParticipant: false,
        showInfoQ: "",
        getEachUncheckedAnswer: {},
        getEditNameInput: {}
    });

    poll = reactive<pollInterface>(
        {
            _id: "",
            name: "",
            comment: "",
            type: "",
            commentsVisibility: "",
            answersType: "",
            options: [],
            active: false,
            participantsComments: [],
            premium: false,
            creator: "",
            organizers: [],
            endDate: "",
            file: "",
            questions: [],
            slots: [],
            timezone: "",
            place: "",
        }
    )

    allQuestions = reactive<questionInterface[]>([
        {
            _id: "",
            name: "",
            position: 0,
            answers: []
        }
    ])

    allParticipants = reactive<userInterface[]>([
        {
            _id: "",
            name: "",
            email: "",
            poll: "",
            answers: []
        }
    ])

    allAnswers = reactive<answerInterfaces[]>([
        {
            _id: "",
            user: "",
            question: "",
            choice: 0
        }
    ])

    getPollById = async (): Promise<pollInterface> => {
        try {
            const response = await PollsAPI.pollById(this.route.params._id as string)
            this.poll = reactive<pollInterface>(response.datas)
            return this.poll
        } catch (error) {
            return this.poll
        }
    };

    //=========================== Essaie du Store ====================================
    // getPollById = () => {
    //     this.store.dispatch(Actions.ALL_POLLS);
    //     console.log('ls', this.store.dispatch(Actions.ALL_POLLS))
    // };


    getPollQuestions = async (): Promise<questionInterface[]> => {
        try {
            const response = await QuestionAPI.getQuestions()
            return this.allQuestions = reactive<questionInterface[]>(response.datas)
        } catch (error) {
            return []
        }
    };

    setAddQuestion = async (nameQuestion): Promise<void> => {
        try {
            const { status, datas } = await QuestionAPI.addQuestion(nameQuestion);
            console.log('this.allQuestions', this.allQuestions)


            // Ajouter le sondage dans l'array
            if (status) {
                if (nameQuestion) {

                    // Création _id TEMPORAIRE POUR LE TEST FRONT
                    const random = (Math.random() + 45 * 2).toString();

                    // ajout question au sondage
                    this.allQuestions.push({
                        // ci-dessous l'id faker
                        _id: random,
                        name: nameQuestion,
                        position: 0,
                        answers:[]
                    });

                    // appel uniquement aux participants du sondage
                    const pollParticipants = this.allParticipants.filter(e => e.poll === this.poll._id)
                    const partAnswersArray: any[] = []

                    if (pollParticipants) {
                        // Création _id TEMPORAIRE POUR LE TEST FRONT
                        const randomAiId = (Math.random() + 75 * 2).toString();

                        pollParticipants.forEach((participant): void => {
                            participant.answers.push({
                                _id: randomAiId,
                                user: participant._id,
                                question: random,
                                choice: null
                            })
                            participant.answers.map((item): void => {
                                if (item.choice === null) {
                                    partAnswersArray.push(item)
                                }
                            })
                        })

                        // ajout les réponses vides de la nouvelle question aux réponses de la question dans le sondage
                        partAnswersArray.filter((item): void => {
                            this.allQuestions.forEach(pollQuestion => {
                                if (pollQuestion._id === item.question && item.choice === null) {
                                    if (pollQuestion.answers.includes(item)) {
                                        return
                                    } else {
                                        pollQuestion.answers.push(item)
                                    }
                                }
                            })
                        });
                    }
                }
            } else {
                    console.log("e est null");
            }
        } catch (error) {
            console.log("Add question error");
        }
    };

    setEditQuestion = async (e):Promise<void> => {
        try {
            const response = await QuestionAPI.editQuestion(e);
            if (response.status) {
                const res = this.poll.questions.find(
                    (el) => el._id === e._id
                ) as questionInterface;
                res.name = e.name;
            }
        } catch (error) {
            console.log("Edite uestion error");
        }
    };

    setDeleteQuestion = async (question):Promise<void> => {
        try {
            const response = await QuestionAPI.deleteQuestion(question)
            if (response.status = true) {
                // supprimer la question du sondage
                const indexQuestion = this.poll.questions.indexOf(question);
                if (indexQuestion > -1) {
                    this.poll.questions.splice(indexQuestion, 1);
                }

                // supprimer la reponse du participant
                if (this.allParticipants.length) {
                    this.allParticipants.forEach(participant => {
                        participant.answers.splice(indexQuestion, 1)
                    });
                }
            } else {
                console.log("error deleteAsk response status");
            }
        } catch (error) {
            console.log("error delete");
        }
    };

    sendInfoQuestion = (data): string => {
        // affichage du nom de la question dans l'input de la modal
        const showInfoQuestions = { ...data };
        return this.data.showInfoQ = showInfoQuestions
    };

    deleteQuestionButton(question): string[] {
         // affichage du nom de la question dans la modal
        return this.data.deleteQuestion = question;
    };

    getPollParticipants = async (): Promise<userInterface[]> => {
        try {
            const response = await ParticipantsAPI.getParticipants()
            const responseAsObject = Object(response)
            this.allParticipants = reactive<userInterface[]>(responseAsObject.datas)
            return this.data.getPollParticipants
        } catch (error) {
            return []
        }
    };

    setAddParticipant = async (newParticipantName:string):Promise<void> => {
        try {
            // TMP WAITING API ENDPOINT
            const { status, datas } = await ParticipantsAPI.addParticipant(newParticipantName);

            if (status) {
                if (newParticipantName) {

                    // injection du nouvelle utilisateur dans NewParticipant
                    this.data.newParticipant = getNewUserRandom(newParticipantName, this.route.params._id)

                    // ajout Answers au participant avec choice 0 par default
                    this.data = setDefaultAnswers(this.poll.questions,this.data)

                    // applique les réponses fournis par l'utisateur par question
                    const { questions, answers } = setUserAnswers(this.data.newParticipant.answers,this.poll.questions)
                    this.poll.questions = questions;
                    this.data.newParticipant.answer = answers;

                    // Ajout nouveau participant à l'array participants
                    this.allParticipants.push(this.data.newParticipant)

                    // retourner le participant et les choix réinitialisés pour ajouter un nouveau participant
                    this.data.newParticipant = resetParticipant(this.route.params._id as string)

                }
            } else {
                console.log("error adduser response status");
            }
        } catch (error) {
            console.log("error de try add participant",error);
        }
    };

    setEditParticipant = async (participant, idxParticipant):Promise<number | void> => {
        try {
            const getParticipant = await ParticipantsAPI.editParticipant(participant);

            if (getParticipant.datas) {
                const getEditNameInput = document.querySelector(`input[id="${participant.name}"]`) as HTMLInputElement
                if (!getEditNameInput.value) {
                    this.data.showField === true
                } else {
                    getParticipant.datas.name = getEditNameInput.value
                }

                // Capture input
                const inputsToEdit = document.querySelectorAll(`input[id="${participant._id}"]`) as unknown
                const inputsAsObject = Array.prototype.slice.call(inputsToEdit)

                inputsAsObject.filter(input => {
                    getParticipant.datas.answers.findIndex(answer => {

                        if (input.checked === true) {
                            if (input.title === answer.question) {
                                answer.choice = 1
                            }
                        }else {
                            if (input.title === answer.question) {
                                answer.choice = 0
                            }
                        }
                        this.poll.questions.findIndex(question => {
                            question.answers.filter(el => {
                                if (el.question === answer.question) {
                                    if (el.user === answer.user) {
                                        el.choice = answer.choice
                                    }
                                }
                            })
                        })
                    });
                })

            }else {
                console.log("Erreur : participant n'existe pas");
            }
        } catch (error) {
            console.log("error TY");
        }
        // Récupérer et cacher la file du participant à modifier
        const getEditRow = document.querySelector(`tr[id="${idxParticipant}"]`) as HTMLInputElement
        getEditRow.style.display = 'none'
    };

    showEditParticipantRow = (indexParticipant): void => {
        if (this.data.editInfoParticipant = false) {
            return
        } else {
            // afficher la file avec les infos du participant à modifier
            const getEditRow = document.querySelector(`tr[id="${indexParticipant}"]`) as HTMLInputElement
            getEditRow.style.display = 'contents'
        }
    };

    hiddenEditUserRow = (participant, indexParticipant): void | number => {
        // Récupérer la file du participant à modifier
        const getEditRow = document.querySelector(`tr[id="${indexParticipant}"]`) as HTMLInputElement
        // Cacher la file du participant
        getEditRow.style.display = 'none'
        // Annuler la modification du nom du participant
        this.allParticipants[indexParticipant].name = participant.name
    };

    setDeleteParticipant = async(participant):Promise<void> => {
        try {
            const response = await ParticipantsAPI.deleteParticipant(participant)
            if (response.status = true) {
                // supprimer la question du sondage
                const indexQuestion = this.allParticipants.indexOf(participant);
                if (indexQuestion > -1) {
                    this.allParticipants.splice(indexQuestion, 1);
                }
                this.poll.questions.forEach(el => {
                    el.answers.filter(answer => {
                        if (participant._id === answer.user) {

                        const indexAnswers1 = el.answers.indexOf(answer);
                        if (indexAnswers1 !== -1) {
                            el.answers.splice(indexAnswers1, 1);
                        }
                    }
                    })
                })
            } else {
                console.log("error delete participant response status");
            }
        }catch (error) {
            console.log("error delete participant");
        }
    }

    deleteParticipantButton(p):string[] {
        return this.data.deleteParticipant = p;
    };
}

