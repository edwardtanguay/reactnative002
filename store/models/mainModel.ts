import { action, Action } from "easy-peasy";

export interface MainModel {
    // state
    message: string;

    // actions
    setMessage: Action<this, string>
}

export const mainModel: MainModel = {
    // state
    message: "Welcome to this site!",

    // actions
    setMessage: action((state, message) => {
        state.message = message;
    })
}