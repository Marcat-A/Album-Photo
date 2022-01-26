import React from "react";
import CustomImage from "./CustomImage";

function HeroSection() {
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">Nos albums photos</h1>
        <p className="info">
          Bienvenue sur notre site d'album photos, n'hésitez pas à visiter !
        </p>
        <button className="btn">Explorer</button>
      </div>
      <div className="col gallery">
        <CustomImage pt={"90%"} />
      </div>
    </div>
  );
}

export default HeroSection;
