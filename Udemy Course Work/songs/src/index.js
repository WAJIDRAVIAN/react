// third party imports
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {createStore} from 'redux';

// My code directory imports
import App from "./components/App";
import reducers from './components/reducers';

ReactDOM.createRoot(document.querySelector('#root')).render(<Provider store={
    createStore(reducers)
}><App/></Provider>);