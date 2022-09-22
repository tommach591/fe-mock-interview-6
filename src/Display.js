import "./Display.css";
import { faker } from "@faker-js/faker";
import { useState } from "react";

function Display() {
  const [type, setType] = useState("cats");

  function GetPictures({ type }) {
    const pictures = [];

    for (let i = 0; i < 25; i++) {
      pictures.push(
        <img
          key={i}
          className="Picture"
          src={faker.image.imageUrl(250, 250, type, true)}
          alt="new"
        />
      );
    }

    return pictures;
  }

  function ChangeType(newType) {
    setType(newType);
  }

  return (
    <div className="Display">
      <div className="Select">
        <div
          className="Option"
          onClick={() => {
            setType("cats");
          }}
        >
          <h4 className="OptionText">Cat</h4>
        </div>
        <div
          className="Option"
          onClick={() => {
            ChangeType("dogs");
          }}
        >
          <h4 className="OptionText">Dog</h4>
        </div>
        <div
          className="Option"
          onClick={() => {
            ChangeType("bears");
          }}
        >
          <h4 className="OptionText">Bear</h4>
        </div>
        <div
          className="Option"
          onClick={() => {
            ChangeType("cows");
          }}
        >
          <h4 className="OptionText">Cow</h4>
        </div>
      </div>
      <div className="Gallery">
        <GetPictures type={type} />
      </div>
    </div>
  );
}

export default Display;
