import moment from "moment";
import { reactive } from "vue";

const todayDate = moment().startOf("day");
const YM = todayDate.format("YYYY-MM");
const YESTERDAY = todayDate.clone().subtract(1, "day").format("YYYY-MM-DD");
const TODAY = todayDate.format("YYYY-MM-DD");
const TOMORROW = todayDate.clone().add(1, "day").format("YYYY-MM-DD");

export const allEvents = reactive([
  {
    idEvent: "",
    start: "",
    end: "",
  },
]);

export { todayDate, YM, YESTERDAY, TODAY, TOMORROW };
