import React, { useState, useEffect } from 'react'
import reducerPosts, { addPost, removePost } from '../redux/posts'
const redux = require("redux")
const {createStore} = redux
export const store = createStore(reducerPosts)

function Posts() {
  const[inputValue, setInputValue] = useState("")
  const[allPosts, setAllPosts] = useState([])
  
  const handleAddPost = (e) => {
    e.preventDefault()
    store.dispatch(addPost(inputValue))
    setInputValue("")
  }

  useEffect(() => { 
    store.subscribe(() => setAllPosts(store.getState()))
  }, [allPosts])

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
        <input type="submit" value="Add post"/>
      </form>
      <div>
        {allPosts?.map((post,idx)=>
        <div key={idx} className="post">
          <p>{idx}. {post}</p>
          <button onClick={()=>store.dispatch(removePost(allPosts[idx]))}>Delete</button>
        </div>
        )}
      </div>
    </div>
  )
}

export default Posts