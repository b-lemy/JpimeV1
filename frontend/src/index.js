import React from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ForumProvider} from "./StoreContext/Forum-context";
import {store} from "./StoreRedux/AuthRedux";
import {Provider} from "react-redux";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <ForumProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ForumProvider>
        </Provider>
    </React.StrictMode>
);


