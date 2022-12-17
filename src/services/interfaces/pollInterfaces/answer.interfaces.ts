export interface answerInterfaces {
    _id: string,
    user: string;
    question: string;
    choice: number;
}

export interface answerAPIINterface {
    status: boolean;
    datas: answerInterfaces[];
}

