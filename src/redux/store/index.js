import { createStore } from "redux"
import { rootReducer } from "../reducer/rootReducer"

// create store and subscribe state
const store = createStore(rootReducer)

store.subscribe(() => {
    console.log("rootReducer", store.getState())
})

export default store