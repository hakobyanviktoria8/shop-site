import "./../styles/App.css"
import CountCopm from "./CountCopm";
import PostsComp from "./PostsComp";

function App() {
  return (
    <div className="App">
     <h1>App Component</h1>
     <hr/>
     <CountCopm/>
     <hr/>
     <PostsComp/>
    </div>
  );
}

export default App;
