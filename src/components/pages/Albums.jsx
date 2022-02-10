
import React, { useEffect, useState } from "react";
import AlbumsCard from "../AlbumsCard";
import AlbumsSearches from "../AlbumsSearches";
import {getPhotosByAlbum} from '../AxiosRequest.js';

function Albums() {

  const [albums, setAlbum] = useState([]);

  getPhotosByAlbum(1, setAlbum)

  useEffect(getPhotosByAlbum, []);
  return (
    <>
      <AlbumsSearches />
      <div className="albums-container">
        {albums.map((album, index) => (<AlbumsCard key={index} album={album} />
        ))}
      </div>
    </>
  );
}

export default Albums;
