export interface pollOptionInterface {
    _id: string,
    name: string,
    value: boolean,
    public: boolean,
    file: string,
    premium: boolean
}

export interface pollOptionAPIINterface {
    status: boolean;
    datas: pollOptionInterface[];
}

