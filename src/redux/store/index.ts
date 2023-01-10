import { createStore, combineReducers } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import { reducer } from '../reducer'
import userReducer from '@redux/reducer/userReducer'
// import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer  } from 'redux-persist'

export const allReducer  = combineReducers({
    reducer,
    userReducer
})

export const store = createStore(allReducer)
