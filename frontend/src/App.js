import React, {Suspense, useEffect, useState} from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Register from "./Components/Authentication/Register";
import Forum from "./Components/Forum/Forum";
import About from "./Components/Layout/About";
import Login from "./Components/Authentication/Login";
import Quiz from "./Components/Quiz/Quiz";
import Notes from "./Components/Notes/Notes";
import SinglePost from "./Components/Forum/SinglePost";
import CreatePost from "./Components/Forum/CreatePost";
import TimedQuiz from "./Components/Quiz/TimedQuiz";
import CategoryQuiz from "./Components/Quiz/CategoryQuiz";
import FinalScore from "./Components/Quiz/FinalScore";
import Landing from "./Components/LandingPage/Landing";
//Lazy Loading implementation
// const Login = lazy(() => import("./Components/Authentication/Login"))

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false);
        }
    }, []);
    return (
        <div className="App">
            <Suspense fallback={
                <Route exact path="/" element={<Landing/>}/>
            }>
                <Routes>
                    <Route exact path="/" element={<Landing/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                    {isLoggedIn ?
                        <React.Fragment>

                            <Route exact path="/notes" element={<Notes/>}/>

                            {/*forum*/}
                            <Route exact path="/forum" element={<Forum/>}/>
                            <Route exact path="/forum/:id" element={<SinglePost/>}/>
                            <Route exact path="/forum/create" element={<CreatePost/>}/>
                            {/*quiz*/}
                            <Route exact path="/quiz" element={<Quiz/>}/>
                            <Route exact path="/quiz/category" element={<CategoryQuiz/>}/>
                            <Route exact path="/quiz/timed_quiz" element={<TimedQuiz/>}/>
                            <Route exact path="/quiz/timed_quiz/finalScore" element={<FinalScore/>}/>
                        </React.Fragment>
                        :
                        <Route path="*" element={<Landing/>}/>
                    }
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
