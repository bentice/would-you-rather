import { getInitialData } from './api'
import { recieveQuestions } from './questions'
import { recieveUsers } from './users'
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