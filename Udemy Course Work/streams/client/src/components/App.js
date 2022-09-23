import React from 'react';
import { MemoryRouter, Route, Link } from 'react-router-dom';

const PageOne = () =>{
    return (
        <div>
            <h1>PageOne</h1>
            <Link to='/pagetwo'>Navigate to Page Two</Link>
        </div>
    );
}

const PageTwo = () =>{
    return (
        <div>
            <h1>PageTwo</h1>
            <Link to='/'>Navigate to Page One</Link>
        </div>
    );
}


const App = () =>{
    return (
        <div>
            <h1>App</h1>
            <MemoryRouter>
                <div>
                    <Route path="/" exact component={PageOne}/>
                    <Route path="/pagetwo" component={PageTwo}/>
                </div>
            </MemoryRouter>
        </div>
    );
}

export default App;