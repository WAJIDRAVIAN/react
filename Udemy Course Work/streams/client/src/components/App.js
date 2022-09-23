import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () =>{
    return (
        <div>
            <h1>PageOne</h1>
            <a href='/pagetwo'>Navigate to Page Two</a>
        </div>
    );
}

const PageTwo = () =>{
    return (
        <div>
            <h1>PageTwo</h1>
            <a href='/'>Navigate to Page One</a>
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