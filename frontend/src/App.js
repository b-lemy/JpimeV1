import React, {useEffect} from "react";
import './App.css';
import {Routes, Route, useNavigate} from "react-router-dom";
import Register from "./Components/Authentication/Register";
import Forum from "./Components/Forum/Forum";
import About from "./Components/Layout/About";
import Login from "./Components/Authentication/Login";
import Quiz from "./Components/Quiz/Quiz";
import {Suspense} from "react";
import Notes from "./Components/Notes/Notes";
import SinglePost from "./Components/Forum/SinglePost";
import CreatePost from "./Components/Forum/CreatePost";
import TimedQuiz from "./Components/Quiz/TimedQuiz";
import CategoryQuiz from "./Components/Quiz/CategoryQuiz";
//Lazy Loading implementation
// const Login = lazy(() => import("./Components/Authentication/Login"))

function App() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);
    return (
        <div className="App">
            <Suspense fallback={
                <div>
                    <div> Loading component</div>
                    <div> Loading component</div>
                </div>

            }>
                <Routes>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path="/notes" element={<Notes/>}/>

                    {/*forum*/}
                    <Route exact path="/forum" element={<Forum/>}/>
                    <Route exact path="/forum/:id" element={<SinglePost/>}/>
                    <Route exact path="/forum/create" element={<CreatePost/>}/>
                    {/*quiz*/}
                    <Route exact path="/" element={<Quiz/>}/>
                    <Route exact path="/quiz" element={<Quiz/>}/>
                    <Route exact path="/quiz/category" element={<CategoryQuiz/>}/>
                    {/*<Route exact path="/quiz/timed_quiz" element={<TimedQuiz/>}/>*/}
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
