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
import CreatePost from "./Components/Forum/CreatePost";



// //Lazy Loading implementation
// const Login = lazy(() => import("./Components/Authentication/Login"))

function App() {

    return (

        <div className="App">
            <Suspense fallback={
                <div> Loading component</div>
            }>
                <Routes>
                    <Route exact path="/about"  element={<About/>} />
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/notes" element={<Notes/>}/>
                    <Route exact path="/" element={<Quiz/>}/>
                    <Route exact path="/quiz" element={<Quiz/>}/>

                    <Route exact path="/register" element={<Register/>}/>

                    {/*forum*/}
                    <Route exact path="/forum" element={<Forum/>}/>
                    <Route exact path="/forum/:id"  element={<SinglePost/>}/>
                    <Route exact path="/forum/create" element={<CreatePost/>}/>

                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
