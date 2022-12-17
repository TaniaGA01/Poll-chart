import { Router, useRoute } from 'vue-router';
import { pollFaker } from "@/app/dashboard/allFakeData/pollFaker"
// import * as PollsAPI from '@/services/helper/poll.helper';
import * as PollsAPI from '@/services/api/polls';
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import { ref } from 'vue';


const route = useRoute()

export interface PollInterface {
    _id?: string;
    name?: string;
    comment?: string;
    type?: string;
    commentsVisibility?: string;
    answersType?: string;
    options?: any;
    active?: boolean;
    participantsComments?: any;
    premium?: boolean;
    creator?: string;
    organizers?: any;
    endDate?: string;
    file?: string;
    questions?: any;
    slots?: any;
    timezone?: string;
    place?: string;
}

export interface pollStandaloneAPIINterface {
    status: boolean;
    datas: object;
    allPolls: object[]
    router;

}


@Module
export default class PollModule extends VuexModule implements pollStandaloneAPIINterface {
    status = true;
    datas = {};
    allPolls = [{}];
    router!: Router;



    /**
     * Get Poll object
     * @returns boolean
     */
    get PollStatus(): boolean {
        return this.status;
    }

    /**
     * Get current Poll
     * @returns Never
     */
    get currentPoll(): PollInterface {
        return this.datas
    }

    // @Mutation
    // [Mutations.SET_POLL_BY_ID]() {
    //     const pollById = this.allPolls.filter((el) => { el._id === route.params._id as string })
    //     this.datas === pollById
    //     console.log('fqse', this.allPolls)
    // }

    @Mutation
    [Mutations.SET_POLL_BY_ID]() {
        [this.allPolls[1]].forEach(element => {
            console.log('element', {...element})
        });
    }

    @Action
    [Actions.ALL_POLLS]() {
        return PollsAPI.getPoll()
        .then(({ datas }) => {
            if (this.allPolls.includes(datas)) {
                return
            } else {
                this.allPolls.push(datas)
            }
            this.context.commit(Mutations.SET_POLL_BY_ID)
        })
        .catch(({ response }) => {
            this.context.commit(response);
        });
    }

}
