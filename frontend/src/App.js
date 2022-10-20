import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Forum from "./Components/Forum/Forum";
import About from "./Components/Layout/About";

function App() {

    return (

        <div className="App">
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/forum" element={<Forum/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default App;
