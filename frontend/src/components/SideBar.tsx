import "../assets/styles/sidebar.css";
export default function SideBar() {
  return (
    <aside className="sidebar">
      <div className="left">
        <img></img>
        <button>
          <i className="fas fa-home"></i>
        </button>
        <button>
          <i className="fas fa-user"></i>
        </button>
        <button>
          <i className="fas fa-home"></i>
        </button>
        <button>
          <i className="fas fa-home"></i>
        </button>
      </div>
      <div className="right">
        <h1>Menu</h1>
        <nav className="buttons">
            <button><i className="fas fa-home"></i></button>
        </nav>
      </div>
    </aside>
  );
}
