import {
    RECIEVE_QUESTIONS,
    ANSWER_QUESTION,
    SAVE_QUESTION
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
                    ...state[action.qid],
                    [action.answer]: {
                      ...state[action.qid][action.answer],
                      votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.id] : {
                    ...action.question,
                }
            }
        default:
            console.log("default questions")
            return state
    }
}