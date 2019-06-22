export const RECIEVE_USERS = "RECIEVE_USERS"
export const ADD_USER_ANSWER = "ADD_USER_ANSWER"
export const ADD_USER_QUESTION = "ADD_USER_QUESTION"

export function recieveUsers(users) {
    return {
        type: RECIEVE_USERS,
        users,
    }
}

export function addUserAnswer ({qid, authedUser, answer }) {
    return {
        type: ADD_USER_ANSWER,
        qid,
        authedUser,
        answer,
    }
}

export function addUserQuestion(question){
    return {
        type: ADD_USER_QUESTION,
        question,
    }
}