export interface SignIn {
    type:String,
    login:{ userName:String, passWord:String}
}
export interface Task {
    type:String,
    task:{ taskName:String, priority:String}
}
export type Action = SignIn | Task;