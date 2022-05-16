import countReducer from "../reducer/countReducer"
import postsReducer from "../reducer/postsReducer"
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        posts: postsReducer,
        count: countReducer,
    }
})

export default store