import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";

import Register from "./Components/Authentication/Register";
import Forum from "./Components/Forum/Forum";
import About from "./Components/Layout/About";
import Login from "./Components/Authentication/Login";
import Quiz from "./Components/Quiz/Quiz";

import {Suspense} from "react";
import Notes from "./Components/Notes/Notes";
import SinglePost from "./Components/Forum/SinglePost";



// //Lazy Loading implementation
// const Login = lazy(() => import("./Components/Authentication/Login"))

function App() {

    return (

        <div className="App">
            <Suspense fallback={
                <div> Loading component</div>
            }>
                <Routes>
                    <Route path="/about"  element={<About/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/notes" element={<Notes/>}/>
                    <Route path="/quiz" element={<Quiz/>}/>
                    <Route path="/forum" element={<Forum/>}/>
                    <Route path="/forum/:id"  element={<SinglePost/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
