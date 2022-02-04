import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import CustomImage from "./CustomImage";

function HeroSection() {
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title"><FormattedMessage id="hero.title" defaultMessage="Nos albums photos" /></h1>
        <p className="info"><FormattedMessage id="hero.info" defaultMessage="Bienvenue sur notre site d'album photos, n'hésitez pas à visiter !" />
          
        </p>
        <Link to={"/Albums"}>
          <button className="btn"><FormattedMessage id="hero.btn" defaultMessage="Explorer" /></button>
        </Link>
      </div>
      <div className="col gallery">
        <CustomImage pt={"90%"} />
      </div>
    </div>
  );
}

export default HeroSection;
