import "./Display.css";
import { faker } from "@faker-js/faker";
import { useMemo } from "react";

function Gallery({ type }) {
  const listOfChoices = ["Cat", "Dog", "Bear", "Cow"];

  function GeneratePictures(type) {
    const pictures = [];

    for (let i = 0; i < 25; i++) {
      pictures.push(
        <img
          key={i}
          className="Picture"
          src={faker.image.imageUrl(250, 250, listOfChoices[type], true)}
          alt="new"
        />
      );
    }

    return pictures;
  }

  const memoizedValue = useMemo(() => GeneratePictures(type), [type]);

  return <div className="Gallery">{memoizedValue}</div>;
}

export default Gallery;
