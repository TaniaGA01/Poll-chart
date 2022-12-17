export interface userInterface {
    _id: string,
    name: string;
    email: string;
    poll: string;
    answers;
}
export interface NewUserInterface {
    _id: string,
    name: string;
    email: string;
    poll: string;
    answers;
}
export interface userAPIINterface {
    status: boolean,
    datas: userInterface[]
}
