import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function AlbumsSearches() {
  const [searchTerm, setSearchTerm] = useState("");
  const searches = [
    "Mojito",
    "Daïquiri",
    "Piña Colada",
    "Caïpirinha",
    "Zombie",
    "Julep",
    "El Presidente",
    "Punch Cubain",
    "Angostura",
    "Mademoiselle",
    "Aloha",
    "Ti-Punch",
    "Planteur",
    "Mai Tai",
    "Tropiques",
    "Long Island",
  ];
  return (
    <div className="albums-tri section">
      <h2><FormattedMessage id="albums.title" defaultMessage="Nos Albums"/></h2>
      <div className="albums-tri-container">
        {searches
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            } else {return("")
            }
          })
          .map((search, index) => (
            <div
              key={index}
              style={{ animationDelay: index * 0.15 + "s" }}
              className="search-item"
            >
              <Link to={search} className="link-search-item">
                {search}
              </Link>
            </div>
          ))}
      </div>
      <div className="search-box">
        <input
          type="text"
          name="search"
          placeholder="Rechercher..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

export default AlbumsSearches;
