import * as types from './actionTypes'

export function signIn(login :any) {
    return {
    type:types.SIGNIN,
    login:login
    }
}

export function addTask(task :any) {
    return {
    type:types.ADDTASK,
    task:task
    }
}

export function deleteTask(id : number) {
    return {
    type:types.ADDTASK,
    id:id
    }
}

export function updateTask(task : any) {
    return {
    type:types.UPDATETASK,
    task:task
    }
}