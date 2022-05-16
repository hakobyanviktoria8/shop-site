import countReducer from "./../reducer/countReducer"
import postsReducer from "./postsReducer"
const redux = require("redux")
const {combineReducers} = redux

export const rootReducer = combineReducers({
    count: countReducer,
    posts: postsReducer,
})

