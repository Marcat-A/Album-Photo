import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {getPhotosByAlbum} from './AxiosRequest.js';

function AlbumsSearches() {

  const [searchTerm, setSearchTerm] = useState("");
  const [albums, setAlbum] = useState([]);

  getPhotosByAlbum(1, setAlbum);
  
  useEffect(getPhotosByAlbum, []);


  return (
    <div className="albums-tri section">
      <h2><FormattedMessage id="albums.title" defaultMessage="Nos Albums"/></h2>
      <div className="albums-tri-container">
        {albums
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            } else {return("")
            }
          })
          .map((album, index) => (
            <div
              key={index}
              style={{ animationDelay: index * 0.15 + "s" }}
              className="search-item"
            >
              <Link to={"/albums/" + album.albumId} className="link-search-item">
                {album.title}
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
