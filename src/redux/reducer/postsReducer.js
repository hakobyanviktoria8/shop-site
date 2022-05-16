export default function postsReducer(posts = [], action) {
    switch(action.type) {
        case "ADD_POST":
            return [
                ...posts,
                action.payload
            ]
        case "REMOVE_POST": {     
            return posts.filter(x => x !== action.payload)
        }
        default:
            return posts
    }
}