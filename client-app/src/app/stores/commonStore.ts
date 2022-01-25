import { ServerError } from "../models/serverError";

import { makeAutoObservable, reaction } from "mobx";
export default class CommonStore {
    error: ServerError | null = null;
    token: string | null = window.localStorage.getItem('jwt');

    appLoaded = false;

    constructor() {
        makeAutoObservable(this);

        reaction (
            () => this.token,
            token => {
                if (token)
                {
                    window.localStorage.setItem('jwt',token);
                }
                else
                {
                    window.localStorage.removeItem('jwt');
                }
            }
        )
    }
    setServerErrror = (error: ServerError) => {
        this.error = error;
    }
    
setToken = (token: string | null) => {

    if (token)
    {
        window.localStorage.setItem('jwt',token);
        this.token = token;

    }

}

  setApploaded = () => {
      this.appLoaded = true;
  }

}