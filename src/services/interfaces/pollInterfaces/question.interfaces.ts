export interface questionInterface {
    _id: string,
    name: string;
    position: number;
    answers: string[];
}
export interface questionAPIINterface {
    status: boolean,
    datas: questionInterface[]
}


