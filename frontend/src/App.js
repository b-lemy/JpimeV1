import './App.css';
import {Routes, Route} from "react-router-dom";

import Register from "./Components/Authentication/Register";
import Forum from "./Components/Forum/Forum";
import About from "./Components/Layout/About";
import Login from "./Components/Authentication/Login"
import {Suspense} from "react";

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
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/forum" element={<Forum/>}/>
                    <Route path="/" element={<Register/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
