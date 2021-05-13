import { createStore } from 'redux'

const initialState = {
    isUserLogIn: false,
    userData: {},
    clickedParkLocation: {},
    todayWaterIntake: {},
    CalendarDates: {},
    waterGraphDate: {},
    walkGraphDates: {},

}

const reducer = (state = initialState, action) => {
    console.log("************ REDUCER",action)
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                isUserLogIn: true
            }
        case 'LOG_OUT_USER':
            return {
                ...state,
                isUserLogIn: false
            }
        case 'SIGN_UP_USER':
            return {
                ...state,
                userData: action.userData
            }
    }
    return state
}

const userStore = createStore(reducer)

export default userStore