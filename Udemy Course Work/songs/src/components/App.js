import React from "react";
//Imports from the directory
import SongList from "./SongList";
const App =()=>{

    return(
        <div className="ui container div">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList/>
                </div>
            </div>
        </div>
    );
}

export default App;