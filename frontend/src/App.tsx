import { Link } from "react-router-dom";
import "./assets/styles/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <div className="full-bg">
        <Link  to="/">
          <p className="tracking-in-expand title-text">TODO-SCHEDULER</p>
        </Link>
      </div>
      <Routes><Route path="/" element={<Login/>}></Route></Routes>
    </Router>
  );
}

export default App;
