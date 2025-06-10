import { Link, Navigate } from "react-router-dom";
import "./assets/styles/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
function App() {
  return (
   
      <Router>
        <div className="full-bg">
          <Link to="/">
            <p className="tracking-in-expand title-text">TODO-SCHEDULER</p>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={localStorage.getItem("authToken")? <Home/> : <Navigate to="Login" />}/>
          <Route path="/login" element = {<Login />}/>

          <Route path="/signin" element={<SignIn />}/>
        </Routes>
      </Router>
  
  );
}

export default App;
