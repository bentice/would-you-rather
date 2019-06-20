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
                    [action.option]: {
                      ...questions[action.qid][action.option],
                      votes: questions[action.qid][action.option].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            return state
    }
}