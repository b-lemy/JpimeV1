import './App.css';
import {Routes, Route, Link} from "react-router-dom";

import Register from "./Components/Authentication/Register";
import Forum from "./Components/Forum/Forum";
import About from "./Components/Layout/About";
import {lazy, Suspense} from "react";

//Lazy Loading implementation
const Login = lazy(() => import("./Components/Authentication/Login"))

function App() {

    return (

        <div className="App">
            <Suspense fallback={
                <div> Loading component</div>
            }>
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<Forum/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
