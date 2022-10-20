import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import WelcomePage from "./Components/WelcomePage";

function App() {
  return (

    <div className="App">
      <Routes>
          <Route path ="/" element={<WelcomePage/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
