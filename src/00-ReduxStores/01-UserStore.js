import { createStore } from 'redux'

const initialState = {
    isUserLogIn: false,
    userData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        water: '',
        weight: ''
    },
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
        case 'UPDATE_WATER':
            return {
                ...state,
                userData: {
                    ...state.userData,
                    water: action.water
                }
            }
        case 'UPDATE_WEIGHT':
            return {
                ...state,
                userData: {
                    ...state.userData,
                    weight: action.weight
                }
            }
        case 'UPDATE_USER_DATA':
          return {
              ...state,
              userData: {
                ...state.userData,
                ...action.userData,
              }
          }
    }
    return state
}

const userStore = createStore(reducer)

export default userStore
