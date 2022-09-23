import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () =>{
    return (
        <div>
            <h1>PageOne</h1>
        </div>
    );
}

const PageTwo = () =>{
    return (
        <div>
            <h1>PageTwo</h1>
        </div>
    );
}


const App = () =>{
    return (
        <div>
            <h1>App</h1>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne}/>
                    <Route path="/pagetwo" component={PageTwo}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;