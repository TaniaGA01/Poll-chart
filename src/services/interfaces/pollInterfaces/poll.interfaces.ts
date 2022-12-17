// import { User } from './user.interfaces'
// import { Question } from './question.interfaces'
// import { Slot } from './slot.interfaces'

// export declare enum TypePollEnum {
//     OPINION = "opinion",
//     MEETING = "meeting"
// }
// export declare enum AnswersTypeEnum {
//     ONLY_ONE_ANSWER = "only_one_answer",
//     YES_NO_MAYBE = "yes_no_maybe"
// }
// export declare enum CommentsVisibilityEnum {
//     PRIVATE_COMMENT = "private_comment",
//     PUBLIC_COMMENT = "public_comment"
// }
// export declare enum OptionPollEnum {
//     ANONYMOUS = "anonymous",
//     NO_ADDS = "no_adds",
//     EDIT_DELETE_VOTE = "edit_delete_vote",
//     EXPORTS = "exports",
//     AUTO_REMINDER = "auto_reminder",
//     FILE = "file",
//     ACTIVITIES_NOTIFS = "activities_notifs",
//     MULTIPLE_ORGANIZER = "multiple_organizer",
//     POLL_LOGO = "poll_logo",
//     POLL_HEADER = "poll_header"
// }
// export declare enum TimezonePollEnum {
//     EUROPE_PARIS = "europe_paris"
// }


// export declare class ParticipantCommentInterface {
//     name: string;
//     comment: string;
//     date: Date;
// }

// export interface PollInterface {
//     name: string;
//     comment: string;
//     type: TypePollEnum;
//     commentsVisibility: CommentsVisibilityEnum;
//     answersType: AnswersTypeEnum;
//     options: [OptionPollEnum];
//     active: boolean;
//     participantsComments: ParticipantCommentInterface[];
//     premium: boolean;
//     creator: User;
//     organizers: User[];
//     endDate: Date;
//     file: string;
//     questions: Question[];
//     slots: Slot[];
//     timezone: TimezonePollEnum;
//     place: string;
// }

export interface pollInterface {
    _id: string;
    name: string;
    comment: string;
    type: string;
    commentsVisibility: string;
    answersType: string;
    options;
    active: boolean;
    participantsComments;
    premium: boolean;
    creator: string;
    organizers;
    endDate: string;
    file: string;
    questions;
    slots;
    timezone: string;
    place: string;
}

export interface pollAPIINterface {
    status: boolean;
    datas: pollInterface[];
}


export interface pollStandaloneAPIINterface {
    status: boolean;
    datas: pollInterface;
}

export interface pollTableInterface {
    newParticipant,
    deleteQuestion: string[],
    deleteParticipant: string[],
    getPollParticipants,
    showField: boolean,
    editInfoParticipant: boolean,
    showInfoQ: string,
    getEachUncheckedAnswer,
    getEditNameInput
}

