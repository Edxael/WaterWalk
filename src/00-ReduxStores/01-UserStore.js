import { createStore } from 'redux'

const initialState = {
    isUserLogIn: false,
    userData: {
        firstName: 'Maximus D.',
        lastName: 'Meridius',
        email: 'maximus@zyphex.com',
        password: 'changeme',
        confirmPassword: 'changeme',
        water: '',
        weight: '240'
    },
    todayWaterIntake: 0,
    waterGraphDate: {},
    walkGraphDates: {},
    activityData: {
        '2021-05-04': {
            water: 20,
            steps: 400
        },
        '2021-05-05': {
            water: 20,
            steps: 400
        },

        '2021-05-06': {
            water: null,
            steps: 400
        },
        '2021-05-07': {
            water: null,
            steps: 400
        },

        '2021-05-17': {
            water: 20,
            steps: null
        },
        '2021-05-18':{
            water: 20,
            steps: null
        },
        '2021-05-19': {
            water: 20,
            steps: null
        },
        '2021-05-20': {
            water: 20,
            steps: null
        },
        '2021-05-28': {
            water: 87,
            steps: 7800
        },
    }

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
