export function addPost(post) {
    return {
        type: "ADD_POST",
        payload: post,
    }
}
export function removePost(post) {
    return {
        type: "REMOVE_POST",
        payload: post,
    }
}

export default function reducerPosts(posts = [], action) {
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

