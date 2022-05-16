import {combineReducers} from "redux";
import countReducer from "./countReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
    count: countReducer,
    posts: postsReducer,
})

export default rootReducer