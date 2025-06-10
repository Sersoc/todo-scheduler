import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    const response = await fetch(``);

    
  };

  const handlerPage = () =>{
    navigate("/signin");
    
  }
  return (
    <div className="login">
      <form className="login-box" onSubmit={handleLogin}>
        <h1>Login</h1>
        <section className="input-box">
            <h2>ID</h2>
          <input
            type="text"
            id="username"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            className=""
            placeholder="UserID"
          />
        </section>
        <section className="input-box">
            <h2>PW</h2>
          <input
            type="password"
            id="userpassword"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
            className=""
            placeholder="UserPassword"
          />
        </section>
        <button type="submit">Login</button>
      <button type="button" onClick={handlerPage}>Sign In</button>  
      </form>
      
    </div>
  );
}
