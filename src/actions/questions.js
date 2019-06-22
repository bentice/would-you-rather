export const RECIEVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ANSWER_QUESTION = "ANSWER_QUESTION"
export const SAVE_QUESTION = "SAVE_QUESTION"


export function recieveQuestions (questions) {
    return {
        type: RECIEVE_QUESTIONS,
        questions,
    }
}

export function answerQuestion ({authedUser, qid, answer }) {
    return {
        type: ANSWER_QUESTION,
        qid,
        authedUser,
        answer,
    }
}

export function addNewQuestion (question) {
    return {
        type: SAVE_QUESTION,
        question,
    }
}
