export interface IStep1 {
    organizerName: string;
    organizerEmail: string;
    meetingName: string;
    meetingDescription: string;
    addFile;
    newQuestions;
    allEvents;
}

export interface IStep2 {
    pollDate: string;
    meetingPlace: string;
    pollOptions;
    optionsComments;
    pollLogo;
}

export interface IStep3 {
    emailMessage: string;
    newAdressesMails;
}

export interface CreatePoll extends IStep1, IStep2 { }
export interface EmailsContacts extends IStep3 { }
