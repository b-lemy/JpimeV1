import React from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {AppProvider} from "./Context/AppContext";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppProvider>
            <BrowserRouter>

                <App/>

            </BrowserRouter>
        </AppProvider>
    </React.StrictMode>
);


