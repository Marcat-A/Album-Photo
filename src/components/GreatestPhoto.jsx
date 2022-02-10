import axios from "axios";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import GreatestCard from "./GreatestCard";


const url = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=9";
const title = "";
function GreatestPhoto() {

  function fetchImage() {
    axios.get(url, title).then((response) => {
      setPictures(response.data);
    });
  }
  const [pictures, setPictures] = useState([]);

  useEffect(fetchImage, []);

  return (
    <div className="section photo">
      <h1 className="title"><FormattedMessage id="greatest.title" defaultMessage="Les clichés les mieux notés" /></h1>
      <div className="greatest-container">
        {pictures.map((great) => (
          <GreatestCard key={great.title} great={great} />
        ))}
      </div>
    </div>
  );
}

export default GreatestPhoto;
