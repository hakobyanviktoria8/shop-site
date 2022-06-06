import "./../styles/App.css"
import CountCopm from "./CountCopm";
import Example from "./Example";
import PostsComp from "./PostsComp";

function App() {
  return (
    <div className="App">
     <h1>App Component</h1>
     <hr/>
     <CountCopm/>
     <hr/>
     <PostsComp/>
     <hr/>
     <Example/>
    </div>
  );
}

export default App;
