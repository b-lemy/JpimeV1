import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
