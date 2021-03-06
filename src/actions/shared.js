import { getInitialData, saveQuestionAnswer, saveQuestion} from '../utils/api'
import { recieveQuestions, answerQuestion, addNewQuestion } from './questions'
import { recieveUsers, addUserAnswer, addUserQuestion } from './users'
import { setAuthedUser } from './authedUser';


export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions})=>{
                dispatch(recieveUsers(users))
                dispatch(recieveQuestions(questions))
            })
    }
}

export function handleAnswerQuestion (info) {
    return (dispatch) => {
        return saveQuestionAnswer(info)
            .then(()=>{
                dispatch(answerQuestion(info))
                dispatch(addUserAnswer(info))
            })
    }
}

export function handleAddQuestion (question) {
    
    return (dispatch) => {
        return saveQuestion(question)
            .then((formattedQuestion)=>{
                dispatch(addNewQuestion(formattedQuestion))
                dispatch(addUserQuestion(formattedQuestion))
                })
    }
}