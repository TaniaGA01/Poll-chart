import { ref, reactive } from "vue";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import { useRoute } from "vue-router";
import { pollOptions } from "@/app/pollCreation/allFakeData/pollOptions";
import { PollOptionsForm } from "@/services/interfaces/pollCreationInterfaces/pollOptions.interfaces"

export default class service {
    route;
    formData = ref();
    formSubmit;
    pollName = ref();
    pollComment;
    currentSchema


    handleStepMeth = () => {

        const route = useRoute();
        this.route = route

        const formData = ref<PollOptionsForm>({
            meetingName: "",
            meetingDescription: "",
            pollOptions
        });
        this.formData = formData

        const CreateFormDataSchema = [
            Yup.object({
                meetingName: Yup.string().required().label("Le nom du sondage")
            })
        ];
        this.currentSchema = CreateFormDataSchema

        const { resetForm, handleSubmit } = useForm<
            PollOptionsForm
            >({
            validationSchema: this.currentSchema
        });

        resetForm({
            values: {
                ...formData.value,
            },
        });

        const formSubmit = handleSubmit((values) => {
            formData.value = {
                ...formData.value,
                ...values,
            };
        });
        this.formSubmit = formSubmit;
    };
}
