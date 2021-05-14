import { createStore } from 'redux'

const initialState = {
    isUserLogIn: true,
    userData: {
        firstName: 'Maximus D',
        lastName: 'Meridius',
        email: 'maximus@zyphex.com',
        password: 'changeme',
        confirmPassword: 'changeme',
        waterIntakeGoal: '161',
        weight: '240'
    },
    clickedParkLocation: {},
    todayWaterIntake: 0,
    calendarDates: {
        '2021-04-02': { periods: [ {startingDay: true, endingDay: false, color: '#77ff5c'} ] },
        '2021-04-07': { periods: [ {startingDay: false, endingDay: true, color: '#77ff5c'} ] },
        '2021-04-22': { periods: [
            {startingDay: false, endingDay: true, color: '#f0e68c'},
            { startingDay: false, endingDay: true, color: '#5f9ea0' }
        ] },

        '2021-05-04': { periods: [ {startingDay: false, endingDay: false, color: '#35f2e9'} ] },
        '2021-05-05': { periods: [ {startingDay: false, endingDay: false, color: '#35f2e9'} ] },
        '2021-05-06': { periods: [ {startingDay: false, endingDay: false, color: '#35f2e9'} ] },
        '2021-05-07': { periods: [ {startingDay: false, endingDay: true, color: '#35f2e9'} ] },

        '2021-05-17': { periods: [ {startingDay: false, endingDay: false, color: '#3552f2'} ] },
        '2021-05-18': { periods: [ {startingDay: false, endingDay: false, color: '#3552f2'} ] },
        '2021-05-19': { periods: [ {startingDay: false, endingDay: false, color: '#3552f2'} ] },
        '2021-05-20': { periods: [ {startingDay: false, endingDay: true, color: '#3552f2'} ] },
    },
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
        case 'ADD_TO_TODAYS_WATER':
            return {
                ...state,
                todayWaterIntake: state.todayWaterIntake + action.waterToAdd
            }
        case 'UPDATE_WATER':
            return {
                ...state,
                userData: {
                    ...state.userData,
                    waterIntakeGoal: action.water
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
