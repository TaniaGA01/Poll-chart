import { ref } from "vue";
export const pollOptions = ref([
    {
        _id: `001`,
        name: `Activation réponses Oui / Non / Peut-être pour chaque réponse`,
        value: false,
        public: false,
        file: "",
        premium: false
    },
    {
        _id: `002`,
        name: `Avoir des notification mail sur les activités du sondage`,
        value: false,
        public: false,
        file: "",
        premium: false
    },
    {
        _id: `003`,
        name: `Limiter à une seule réponse par participant`,
        value: false,
        public: false,
        file: "",
        premium: false
    },
    {
        _id: `004`,
        name: `Vote/opinion anonyme`,
        value: false,
        public: false,
        file: "",
        premium: false
    },
    {
        _id: `005`,
        name: `Modifier / Supprimer les votes par le participant (y compris le sien)`,
        value: false,
        public: false,
        file: "",
        premium: true
    },
    {
        _id: `006`,
        name: `Envoyer de rappels automatiques aux participants`,
        value: false,
        public: false,
        file: "",
        premium: true
    },
    {
        _id: `007`,
        name: `Export des réponses`,
        value: false,
        public: false,
        file: "",
        premium: true
    },
    {
        _id: `008`,
        name: `Sondage sans publicité`,
        value: false,
        public: false,
        file: "",
        premium: true
    },
    {
        _id: `009`,
        name: `Ajouter plusieurs organisateurs`,
        value: false,
        public: false,
        file: "",
        premium: true
    },
    {
        _id: `010`,
        name: `Ajout des commentaires des participants`,
        value: false,
        public: false,
        file: "",
        premium: true
    },
    {
        _id: `011`,
        name: `Ajouter un logo au sondage`,
        value: false,
        public: false,
        file: "",
        premium: true

    },
    {
        _id: `012`,
        name: `Ajouter une bannière`,
        value: false,
        public: false,
        file: "",
        premium: true
    },
]);
export const urlLogo = ref([])
export const pollLogo = ref([]);
export const urlBanner = ref([]);
export const pollBanner = ref([]);
