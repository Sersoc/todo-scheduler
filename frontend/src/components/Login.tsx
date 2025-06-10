import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
interface LoginResponse {
  token: string; // 서버에서 반환하는 JWT 토큰의 필드
}
export default function Login() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    const response = await fetch(`http://localhost:5000/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        userPassword: userPassword,
      }),
    });

    event.preventDefault();

    const data: LoginResponse = await response.json();
    console.log(`data token ${data.token}`);
    localStorage.setItem("authToken", data.token);
    navigate("/"); // 홈 페이지로 이동
    window.location.reload();
  };

  const handlerPage = () => {
    navigate("/signin");
  };
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
        <button type="button" onClick={handlerPage}>
          Sign In
        </button>
      </form>
    </div>
  );
}
