import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function AlbumsSearches() {
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
      <h2>Nos Albums</h2>
      <div className="albums-tri-container">
        {searches.map((search, index) => (
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
        <input type="text" name="search" placeholder="Rechercher ..." />
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

export default AlbumsSearches;
