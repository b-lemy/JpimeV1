import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";

import Register from "./Components/Authentication/Register";
import Forum from "./Components/Forum/Forum";
import About from "./Components/Layout/About";

import {Suspense} from "react";

import Login from "./Components/Authentication/Login";

// //Lazy Loading implementation
// const Login = lazy(() => import("./Components/Authentication/Login"))

function App() {

    return (

        <div className="App">
            <Suspense fallback={
                <div> Loading component</div>
            }>
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/log" element={<Login/>}/>
                    <Route path="/" element={<Forum/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
