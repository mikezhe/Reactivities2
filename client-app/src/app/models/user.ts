export  interface  User {
    username:string;
    displayMame:string;
    token:string;
    image?: string

}

export interface UserFormValues {

    email: string;
    password: string;
    username?:string;
    displayMame?:string;
}