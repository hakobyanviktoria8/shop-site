import React,{useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { addPost, removePost } from '../redux/action/postsAction'

function PostsComp() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    const[inputValue, setInputValue] = useState("")

    const handleAddPost = (e) => {
        e.preventDefault()
        dispatch(addPost(inputValue))
        setInputValue("")
    }
console.log(posts);
  return (
    <div>
        <h2>Posts</h2>
        <form onSubmit={ handleAddPost }>
            <input 
            type={"text"} 
            value={inputValue} 
            onChange={(e)=>setInputValue(e.target.value)} 
            placeholder="Write post"
            />
            <input type="submit" value="Add post" disabled={!inputValue}/>
        </form>
      
        <div>
            {posts?.map((post,idx)=>
                <div key={idx} className="post">
                    <p>{idx}. {post}</p>
                    <button onClick={()=>dispatch(removePost(posts[idx]))}>Delete</button>
                </div>
            )}
        </div>
    </div>
  )
}

export default PostsComp