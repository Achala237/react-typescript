export interface SignIn {
    type:"SIGNIN",
    login:{ userName:String, passWord:String}
}

export type Action = SignIn;