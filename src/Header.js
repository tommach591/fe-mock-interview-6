import "./Header.css";
import { useState } from "react";

function Header({ isMobile }) {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  function GetMenusDesktop() {
    return (
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
    );
  }

  function GetMenusMobile() {
    return (
      <div className="Dropdown">
        <div
          className="Burger"
          onClick={() => {
            setDropDownOpen(!dropDownOpen);
          }}
        >
          <div className="Bar"></div>
          <div className="Bar"></div>
          <div className="Bar"></div>
        </div>
        {dropDownOpen ? (
          <div className="Menus">
            <div className="Menu Home">Home</div>
            <div className="Menu Careers">Careers</div>
            <div className="Menu Contact">Contact</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }

  return (
    <div className="Header">
      {isMobile ? (
        <h1 className="Title">FE Mock Interview 6</h1>
      ) : (
        <h2 className="Title">FE Mock Interview 6</h2>
      )}
      {isMobile ? <GetMenusDesktop /> : <GetMenusMobile />}
    </div>
  );
}

export default Header;
