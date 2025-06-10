import { useState } from "react";
import "../assets/styles/signin.css";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
    const [userId,setUserId] = useState("");
    const [userPassword,setUserPassword] = useState("");
    const navigate = useNavigate();
    const handleSignIn = async () => {
        const response = await fetch();
    }
    const handlePage = () =>{
        navigate("/");
    }
  return (
    <div className="sign-in">
      <form className="sign-in-box" onSubmit={handleSignIn}>
        <h1>Sign In</h1>
        <section className="input-box">
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
        <section className="input-box">
          <input
            type="password"
            id="userpassword"
            // value={userPassword}
            // onChange={(e) => setUserPassword(e.target.value)}
            required
            className=""
            placeholder="Check Password"
          />
        </section>
        <button type="submit">Sign In</button>
        <button type="button" onClick={handlePage}>Return to Login</button>
      </form>
    </div>
  );
}
