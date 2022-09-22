import "./Display.css";
import { faker } from "@faker-js/faker";
import { useState } from "react";

function Display() {
  const [type, setType] = useState(0);
  const listOfChoices = ["Cat", "Dog", "Bear", "Cow"];

  function GetSelect() {
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

  function GeneratePictures({ type }) {
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

  return (
    <div className="Display">
      <div className="Select">
        <GetSelect />
      </div>
      <div className="Gallery">
        <GeneratePictures type={listOfChoices[type]} />
      </div>
    </div>
  );
}

export default Display;
