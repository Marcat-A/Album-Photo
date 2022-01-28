import React from "react";
import AlbumsCard from "../AlbumsCard";
import AlbumsSearches from "../AlbumsSearches";

function Albums() {
  const albums = [
    {
      title: "Mojito",
      image: "https://via.placeholder.com/600/dbc1e8",
    },
    {
      title: "Daïquiri",
      image: "https://via.placeholder.com/150/46e3b1",
    },
    {
      title: "Piña Colada",
      image: "https://via.placeholder.com/150/a45dfe",
    },
    {
      title: "Caïpirinha",
      image: "https://via.placeholder.com/600/ac5e1f",
    },
    {
      title: "Zombie",
      image: "https://via.placeholder.com/600/b9a4",
    },
    {
      title: "Julep",
      image: "https://via.placeholder.com/600/bfad6e",
    },
    {
      title: "El Presidente",
      image: "https://via.placeholder.com/600/39cac2",
    },
    {
      title: "Punch Cubain",
      image: "https://via.placeholder.com/600/e8c4d1",
    },
    {
      title: "Angostura",
      image: "https://via.placeholder.com/600/53e006",
    },
    {
      title: "Mademoiselle",
      image: "https://via.placeholder.com/600/774321",
    },
    {
      title: "Aloha",
      image: "https://via.placeholder.com/600/53e006",
    },
    {
      title: "Ti-Punch",
      image: "https://via.placeholder.com/600/3af4b9",
    },
    {
      title: "Planteur",
      image: "https://via.placeholder.com/600/affe00",
    },
    {
      title: "Mai Tai",
      image: "https://via.placeholder.com/600/d6dd28",
    },
    {
      title: "Tropiques",
      image: "https://via.placeholder.com/600/e8c4d1",
    },
    {
      title: "Long Island",
      image: "https://via.placeholder.com/600/fb4137",
    },
  ]; /* .sort(() => Math.random() - 0.5) */
  return (
    <>
      <AlbumsSearches />
      <div className="albums-container">
        {albums.map((album, index) => (
          <AlbumsCard key={index} album={album} />
        ))}
      </div>
    </>
  );
}

export default Albums;
