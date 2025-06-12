import {  Navigate } from "react-router-dom";
import "./assets/styles/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { UserInfoContext } from "./contexts/UserInfoContext";
import Header from "./components/Header";
import '@fortawesome/fontawesome-free/css/all.min.css'
interface UserInfo {
  userId: string;
}
function App() {
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const decoded = token ? jwtDecode<UserInfo>(token) : undefined;

    setUserId(decoded ? decoded.userId : "");
  },[]);
  return (
    <UserInfoContext.Provider value={{ userId, setUserId }}>
      <Router>
        <Header/>
        <Routes>  
          <Route
            path="/"
            element={
              localStorage.getItem("authToken") ? (
                <Home />
              ) : (
                <Navigate to="Login" />
              )
            }
          />
          <Route path="/login" element={<Login />} />

          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </UserInfoContext.Provider>
  );
}

export default App;
