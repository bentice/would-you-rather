import { getInitialData, saveQuestionAnswer, saveQuestion} from '../utils/api'
import { recieveQuestions, answerQuestion, addNewQuestion } from './questions'
import { recieveUsers, addUserAnswer, addUserQuestion } from './users'
import { setAuthedUser } from './authedUser'

/* temporary while I figure out login */
const AUTHED_ID = ''

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
        console.log('handleAnswerQuestionReached', info)
        return saveQuestionAnswer(info)
            .then(()=>dispatch(answerQuestion(info)))
            .then(()=>dispatch(addUserAnswer(info)))
    }
}

export function handleAddQuestion (question) {
    return (dispatch) => {
        return saveQuestion(question)
            .then((formattedQuestion)=>dispatch(addNewQuestion(formattedQuestion)))
            .then((formattedQuestion)=>dispatch(addUserQuestion(formattedQuestion)))
    }
}