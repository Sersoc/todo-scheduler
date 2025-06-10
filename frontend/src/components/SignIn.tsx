import { useState } from "react";
import "../assets/styles/signin.css";
import { useNavigate } from "react-router-dom";
interface SignInResponseType {
    ok : boolean;
}
export default function SignIn() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const handleSignIn = async () => {
    const request = await fetch(`http://localhost:5000/signin`, {
      method: "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify( {
        userId: userId,
        userPassword: userPassword,
        userName: userName,
      }),
    });

    const response : SignInResponseType = await request.json();

    if (response.ok){
        navigate("/");
    }
  };
  const handlePage = () => {
    navigate("/");
  };
  return (
    <div className="sign-in">
      <form className="sign-in-box" onSubmit={handleSignIn}>
        <h1>Sign In</h1>
        <section className="input-box">
          <h2>ID</h2>
          <input
            type="text"
            id="userid"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            className=""
            placeholder="UserID"
          />
        </section>
        <section className="input-box">
          <h2>Name</h2>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className=""
            placeholder="UserName"
          />
        </section>
        <section className="input-box">
          <h2>Password</h2>
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
          <h2>Check Password</h2>
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
        <button type="button" onClick={handlePage}>
          Return to Login
        </button>
      </form>
    </div>
  );
}
