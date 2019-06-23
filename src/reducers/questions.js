import {
    RECIEVE_QUESTIONS,
    ANSWER_QUESTION
} from '../actions/questions'

export default function questions (state={}, action) {
    switch(action.type){
        case RECIEVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
                }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...questions[action.qid],
                    [action.answer]: {
                      ...questions[action.qid][action.answer],
                      votes: questions[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            console.log("default questions")
            return state
    }
}