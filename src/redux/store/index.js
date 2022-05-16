// import { configureStore } from '@reduxjs/toolkit';
// import countReducer from '../reducer/countReducer';

import postsReducer from "../reducer/postsReducer"

// const store = configureStore({reducer: countReducer})
// console.log("Count state ",store.getState())

const redux = require("redux")
const {createStore} = redux
export const store = createStore(postsReducer)