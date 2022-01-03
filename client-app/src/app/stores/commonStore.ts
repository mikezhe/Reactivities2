import { ServerError } from "../models/serverError";

import { makeAutoObservable } from "mobx";
export default class CommonStore {
    error: ServerError | null = null;

    constructor() {
        makeAutoObservable(this)
    }
    setServerErrror = (error: ServerError) => {
        this.error = error;
    }
    
}