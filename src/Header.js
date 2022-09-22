import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h1 className="Title">FE Mock Interview 6</h1>
      <div className="Menus">
        <div className="Menu Home">
          <h1>Home</h1>
        </div>
        <div className="Menu Careers">
          <h1>Careers</h1>
        </div>
        <div className="Menu Contact">
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
