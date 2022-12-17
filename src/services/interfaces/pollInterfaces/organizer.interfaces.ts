export interface organizerInterface {
    _id: string,
    name: string,
    email: string,
    premium: boolean,
    creator: boolean
}

export interface organizerAPIINterface {
    status: boolean;
    datas: organizerInterface[];
}
