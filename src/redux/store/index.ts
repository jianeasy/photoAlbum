import { createStore } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import { reducer } from '../reducer'
// import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer  } from 'redux-persist'

// const 

export const store = createStore(reducer)

