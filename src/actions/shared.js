import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { recieveQuestions, answerQuestion, addNewQuestion } from './questions'
import { recieveUsers, addUserAnswer, addUserQuestion } from './users'
import { setAuthedUser } from './authedUser'

/* temporary while I figure out login */
const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions})=>{
                dispatch(recieveUsers(users))
                dispatch(recieveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}

export function handleAnswerQuestion (info) {
    return (dispatch) => {
        return saveQuestionAnswer(info)
            .then(()=>dispatch(answerQuestion(info)))
            .then(()=>dispatch(addUserAnswer(info)))
    }
}

export function handleAddQuestion (question) {
    return (dispatch) => {
        return saveQuestion(question)
            .then(()=>dispatch(addNewQuestion(question)))
            .then(()=>dispatch(addUserQuestion(question)))
    }
}