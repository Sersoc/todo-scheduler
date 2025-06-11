import { Link } from "react-router-dom";
import { UserInfoContext } from "../contexts/UserInfoContext";
import { useContext } from "react";

export default function Header() {
  const userContext = useContext(UserInfoContext);

  let userId = undefined;
  if (!userContext) {
    return;
  } else {
    userId = userContext.userId;
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };
  return (
    <div className="full-bg">
      <p className="left"></p>
      <Link to="/">
        <p className="tracking-in-expand title-text">TODO-SCHEDULER</p>
      </Link>
      <section id="right" className="right">        
        {userId ? userId : undefined}
        {userId ? <button onClick={handleLogout}>Logout</button> : undefined}
      </section>
    </div>
  );
}
