export default function countReducer(count = 0, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return count + action.payload
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count - 1
        default:
            return count
    }
}