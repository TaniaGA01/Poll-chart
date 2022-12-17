import { computed } from "vue";
import { useRoute } from "vue-router";

export default class service {
    route = useRoute();

    opinionBlock = computed(() => {
        return this.route.name === "opinion";
    });
    reunionBlock = computed(() => {
        return this.route.name === "reunion";
    });

    isOpinionBlock = () => {
        return this.opinionBlock.value
    }

    isReunionBlock = () => {
        return this.reunionBlock.value
    }
 }


