import axios from "axios";
import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=9";
const title = "";

function CustomImage({ pt }) {
  function fetchImage() {
    axios.get(url, title).then((response) => {
      setPictures(response.data);
    });
  }
  const [pictures, setPictures] = useState([]);

  useEffect(fetchImage, []);

  return (
    <>
      {pictures.map((picture) => (
        <div
          className="custom-image"
          style={{ paddingTop: pt }}
          key={picture.title}
        >
          <img src={picture.url} alt={picture.title} />
          <p>{picture.title}</p>
        </div>
      ))}
    </>
  );
}

export default CustomImage;
