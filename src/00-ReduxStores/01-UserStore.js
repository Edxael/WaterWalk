import { createStore } from 'redux'

const initialState = {
    isUserLogIn: false
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return { isUserLogIn: true }
        case 'LOG_OUT_USER':
            return { isUserLogIn: false }  
    }
    return state
}

const userStore = createStore(reducer)

export default userStore