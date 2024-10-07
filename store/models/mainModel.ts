import { action, Action } from "easy-peasy";

export interface MainModel {
    // state
    message: string;
    count: number;

    // actions
    setMessage: Action<this, string>
    setCount: Action<this, number>
    resetAll: Action<this>
}

export const initialState = {
    message: "Welcome to this site!",
    count: 0,
}

export const mainModel: MainModel = {
    // state
    ...initialState,

    // actions
    setMessage: action((state, message) => {
        state.message = message;
    }),
    setCount: action((state, count) => {
        state.count = count;
    }),
    resetAll: action((state) => {
        state.count = initialState.count;
        state.message = initialState.message;
    })
}