import {
    RECIEVE_USERS,
    ADD_USER_ANSWER
} from '../actions/users'

export default function users (state={}, action) {
    switch(action.type){
        case RECIEVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_USER_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                      ...state[action.authedUser].answers,
                      [action.qid]: action.option
                    }
                }
            }
        default:
            return state
    }
}