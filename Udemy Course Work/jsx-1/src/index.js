// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a refrence to the Div with ID root
const element = document.getElementById('root');

// 3) Tell react to take coontrol of that element
const root = ReactDOM.createRoot(element);
// 4) Create a Component
function App() {
    // let msg = 'hello';
    // if (Math.random()>0.5) {
    //     msg = 'Hello Wajid';
    // }

    return <h1>{new Date().toLocaleDateString()}</h1>
}

// 5) Show the component on the screen
root.render(<App/>);