export interface slotInterface {
    _id: string,
    position: number;
    answers: object[];
    startDate: Date;
    endDate: Date;
    poll: object[];
}

export interface slotAPIINterface {
    status: boolean;
    datas: slotInterface[];
}
