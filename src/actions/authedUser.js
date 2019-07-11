export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}

export function handleLogin (id) {
    return (dispatch) => {
        return(dispatch(setAuthedUser(id)))
    }
}

export function handleLogout () {
    return (dispatch) => {
        return(dispatch(setAuthedUser(null)))
    }
}