import React from "react";

import PostList from "./PostList";
const App = () =>{
    return(
        <div>
            <header className="header">
                <h1>Blog</h1>
            </header>
            <div className="ui container">
                <PostList/>
            </div>
        </div>
    );
}

export default App;