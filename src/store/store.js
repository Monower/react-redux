import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Counter/counterSlice'

export default configureStore({
    reducer: {
        counter : counterReducer
    },
    /* middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    } */
})