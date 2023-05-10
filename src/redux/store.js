import {configureStore} from '@reduxjs/toolkit'
import appConfigReducer from './slices/appConfig'
import postsReducer from './slices/postSlice'
import feedDataReducer from './slices/feedslice'

export default configureStore({
    reducer:{
        appConfigReducer,
        postsReducer,
        feedDataReducer
    }
})