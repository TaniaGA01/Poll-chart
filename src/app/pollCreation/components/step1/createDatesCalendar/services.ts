import { reactive } from "vue";
import frLocale from "@fullcalendar/core/locales/fr";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { allEvents, todayDate, TODAY } from "@/app/pollCreation/allFakeData/eventsCal";
import moment from "moment";
import "moment/locale/fr";

export default class service {

    getNewEvent = (e) => {
        allEvents.push(e);
    };

    getUpdateEvent = (x) => {
        const response = allEvents.findIndex((e) => e.idEvent === x.idEvent);
        allEvents.splice(response, 1, x); // splice : remplacer (il sert à update and delete) --> on récupre l'index, on splice un élément et on le remplace par x
    };

    deleteNewEvent = reactive((a) => {
        allEvents.splice(
            allEvents.findIndex((e) => e.idEvent === a),
            1
        ); // on recupere l'index et on splice 1 élément
    });

    calendarOptions = reactive({
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        headerToolbar: {
            left: "prev,next today",
            center: "",
            // right: "dayGridMonth,timeGridWeek,timeGridDay"
            right: "title",
        },
        views: {
            // dayGridMonth: { buttonText: "Mois" },
            timeGridWeek: { buttonText: "Semaine" },
            // timeGridDay: { buttonText: "Jours" },
        },
        initialView: "timeGridWeek",
        locales: [frLocale],
        locale: "fr",
        initialDate: TODAY,
        firstDay: todayDate,
        navLinks: true, // on peut cliquer sur les noms de jour/semaine pour naviguer dans les vues
        selectable: true,
        selectMirror: true,
        events: allEvents,
        editable: true,
        dayMaxEvents: true, // autoriser le lien "plus" lorsque trop d'événements

        selectAllow: (selectInfo) => {
            // désactiver addEvent avant aujourd'hui
            const beforeToday = todayDate.diff(selectInfo.start);
            const noEventsBeforeToday = beforeToday <= 0;
            return noEventsBeforeToday;
        },

        select: (e) => {
            const cal = e.view.calendar;
            const cal2 = e.view;
            console.log(`calendar`, cal);
            console.log(`view`, cal2);
            cal.unselect();
            cal.addEvent({
                start: e.start,
                end: e.end,
                allDay: e.allDay,
            });
        },

        eventClick: (e) => {
            const idEvent = e.event["_instance"].defId;
            this.deleteNewEvent(idEvent);
            e.event.remove();
            console.log("e", e.event);
        },

        eventAdd: (e) => {
            const idEvent = e.event["_instance"].defId;
            const start = moment(e.event.start).locale("fr").format("LLLL");
            const end = moment(e.event.end).locale("fr").format("LLLL");

            const newEvent = { idEvent, start, end };

            this.getNewEvent(newEvent);
        },

        eventChange: (e) => {
            const idEvent = e.event["_instance"].defId;
            const start = moment(e.event.start).locale("fr").format("LLLL");
            const end = moment(e.event.end).locale("fr").format("LLLL");

            const updateEvent = { idEvent, start, end };

            this.getUpdateEvent(updateEvent);
        },

          eventRemove: (e) => {
            const idEvent = e.event["_instance"].defId;
            this.deleteNewEvent(idEvent);
            e.idEvent.remove();
          },
    });

    isCalendarOptions = () => {
        return this.calendarOptions
    }


 }


