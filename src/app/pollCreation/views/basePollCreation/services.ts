import { computed, onMounted, ref } from "vue";
import { StepperComponent } from "@/assets/ts/components";
import { useForm } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";
import { useRoute } from "vue-router";
import { newQuestions } from "@/app/pollCreation/allFakeData/newQuestions";
import { newAdressesMails } from "@/app/pollCreation/allFakeData/newParticipantMails";
import { allEvents } from "@/app/pollCreation/allFakeData/eventsCal";
import { pollOptions } from "@/app/pollCreation/allFakeData/pollOptions";
import { optionsComments } from "@/app/pollCreation/allFakeData/optionComment";
import { IStep1, IStep2, IStep3, CreatePoll, EmailsContacts } from "@/services/interfaces/pollCreationInterfaces/pollCreation.interfaces";


export default class service {
    route;
    _stepperObj;
    horizontalWizardRef;
    CreatePollOpinionSchema;
    CreatePollReunionSchema;
    currentStepIndex;
    formData = ref();
    EmailsData = ref();
    currentSchema;
    totalSteps = ref();
    resetForm;
    handleStep;
    handleSubmit;
    previousStep = ref();
    formSubmit;
    emailSubmit;


    handleStepMeth = () => {

        const route = useRoute();
        this.route = route

        const _stepperObj = ref<StepperComponent | null>(null);
        this._stepperObj = _stepperObj

        const horizontalWizardRef = ref<HTMLElement | null>(null);
        this.horizontalWizardRef = horizontalWizardRef

        const currentStepIndex = ref(0);
        this.currentStepIndex = currentStepIndex

        const formData = ref<CreatePoll>({
            organizerName: "",
            organizerEmail: "",
            meetingName: "",
            meetingDescription: "",
            addFile: "",
            newQuestions,
            allEvents,
            pollDate: "",
            meetingPlace: "",
            pollOptions,
            pollLogo: "",
            optionsComments,
        });
        this.formData = formData

        const EmailsData = ref<EmailsContacts>({
            emailMessage: "",
            newAdressesMails,
        });
        this.EmailsData = EmailsData

        onMounted(() => {
            this._stepperObj.value = StepperComponent.createInsance(
                this.horizontalWizardRef.value as HTMLElement
            );
        });

        const CreatePollOpinionSchema = [
            Yup.object({
                organizerName: Yup.string()
                .required()
                .label("Le nom de l'organisateur"),
                organizerEmail: Yup.string().email().required().label("L'adresse mail"),
                meetingName: Yup.string().required().label("Le nom du sondage"),
                newQuestions: Yup.array()
                .of(
                    Yup.object().shape({
                    name: Yup.string().required().label("Au moins une question"),
                    })
                )
                .strict(),
            }),
            Yup.object({
                pollDate: Yup.string().required().label("La date d'expiration"),
            }),
        ];
        this.CreatePollOpinionSchema = CreatePollOpinionSchema


        const CreatePollReunionSchema = [
            Yup.object({
                organizerName: Yup.string()
                .required()
                .label("Le nom de l'organisateur"),
                meetingName: Yup.string().required().label("Le nom du sondage"),
            }),
            Yup.object({
                pollDate: Yup.string().required().label("La date d'expiration")
                // allEvents: Yup.array()
                // .of(
                //     Yup.object().shape({
                //     name: Yup.string().required().label("Au moins une question"),
                //     })
                // )
                .strict(),
            }),
        ];
        this.CreatePollReunionSchema = CreatePollReunionSchema

        const currentSchema = computed(() => {
            if (this.route.name === "opinion") {
                return this.CreatePollOpinionSchema[this.currentStepIndex.value];
            } else {
                return this.CreatePollReunionSchema[this.currentStepIndex.value];
            }
        });
        this.currentSchema = currentSchema

       const { resetForm, handleSubmit } = useForm<
            // vee-validate
            IStep1 | IStep2 | IStep3
            >({
            validationSchema: this.currentSchema,
        });

        const totalSteps = computed(() => {
            if (!this._stepperObj.value) {
                return;
            }

            return this._stepperObj.value.totatStepsNumber;
        });
        this.totalSteps = totalSteps

        resetForm({
            values: {
                ...this.formData.value,
            },
        });


        const handleStep = handleSubmit(() => {

            this.currentStepIndex.value++;

            if (!this._stepperObj.value) {

                console.log('currentStep2 : ', this._stepperObj.value)
                return;
            }

            this._stepperObj.value.goNext();

        });
        this.handleStep = handleStep
        this.handleSubmit = handleSubmit;

        const previousStep = () => {
            if (!this._stepperObj.value) {
                return;
            }

            this.currentStepIndex.value--;

            this._stepperObj.value.goPrev();
        };
        this.previousStep = ref(previousStep);

        const formSubmit = handleSubmit((values) => {

            if (this.currentStepIndex.value === 1) {
                this.formData.value = {
                ...this.formData.value,
                ...values,
                };
                console.log("poll Date : ", this.formData.value);
            }

            this.currentStepIndex.value++;

            if (!this._stepperObj.value) {
                return;
            }

            this._stepperObj.value.goNext();
        });
        this.formSubmit = formSubmit;

        const emailSubmit = handleSubmit((values) => {
            this.formData.value = {
                ...this.formData.value,
                ...values,
            };

            console.log("message mail : ", this.EmailsData.value.emailMessage);
            console.log("mails participants : ", this.EmailsData.value.newAdressesMails);

            Swal.fire({
                text: "Le sondage a bien été envoyé aux participants",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok, merci !",
                customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
                },
            }).then(() => {
                window.location.reload();
            });
        });
        this.emailSubmit = emailSubmit;
    };
}
