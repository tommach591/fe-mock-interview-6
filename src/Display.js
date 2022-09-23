import "./Display.css";
import Gallery from "./Gallery";
import { useState } from "react";

function Display({ isMobile }) {
  const [type, setType] = useState(0);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const listOfChoices = ["Cat", "Dog", "Bear", "Cow"];

  function GetSelectDesktop() {
    const options = [];
    for (let i = 0; i < 4; i++) {
      options.push(
        <div
          className={type === i ? "Option On" : "Option Off"}
          key={i}
          onClick={() => {
            setType(i);
          }}
        >
          <h4 className="OptionText">{listOfChoices[i]}</h4>
        </div>
      );
    }

    return options;
  }

  function GetOptionsForMobile() {
    const options = [];
    for (let i = 0; i < 4; i++) {
      options.push(
        <div
          key={i}
          className="Choices"
          onClick={() => {
            setType(i);
            setDropDownOpen(!dropDownOpen);
          }}
        >
          <div className="ChoiceText">{listOfChoices[i]}</div>
        </div>
      );
    }

    return options;
  }

  function GetSelectMobile() {
    return (
      <div className="DropdownOptions">
        <div
          className="Selected"
          onClick={() => {
            setDropDownOpen(!dropDownOpen);
          }}
        >
          {listOfChoices[type]}
          <div className={dropDownOpen ? "ArrowUp" : "ArrowDown"}></div>
        </div>
        {dropDownOpen ? (
          <div className="ListOfChoices">
            <GetOptionsForMobile />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }

  return (
    <div className="Display">
      <div className="Select">
        {isMobile ? <GetSelectDesktop /> : <GetSelectMobile />}
      </div>
      <Gallery type={type} />
    </div>
  );
}

export default Display;
