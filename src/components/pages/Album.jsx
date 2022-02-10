import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumTheory from "../AlbumTheory";

function Album() {
  const params = useParams();
  // const albums = [
  //   {
  //     title: "Mojito",
  //     mainImage: "https://via.placeholder.com/600/dbc1e8",
  //     albumId: "1",
  //   },
  //   {
  //     title: "Daïquiri",
  //     mainImage: "https://via.placeholder.com/150/46e3b1",
  //     albumId: "2",
  //   },
  //   {
  //     title: "Piña Colada",
  //     mainImage: "https://via.placeholder.com/150/a45dfe",
  //     albumId: "3",
  //   },
  //   {
  //     title: "Caïpirinha",
  //     mainImage: "https://via.placeholder.com/600/ac5e1f",
  //     albumId: "4",
  //   },
  //   {
  //     title: "Zombie",
  //     mainImage: "https://via.placeholder.com/600/b9a4",
  //     albumId: "5",
  //   },
  //   {
  //     title: "Julep",
  //     mainImage: "https://via.placeholder.com/600/bfad6e",
  //     albumId: "6",
  //   },
  //   {
  //     title: "El Presidente",
  //     mainImage: "https://via.placeholder.com/600/39cac2",
  //     albumId: "7",
  //   },
  //   {
  //     title: "Punch Cubain",
  //     mainImage: "https://via.placeholder.com/600/e8c4d1",
  //     albumId: "8",
  //   },
  //   {
  //     title: "Angostura",
  //     mainImage: "https://via.placeholder.com/600/53e006",
  //     albumId: "9",
  //   },
  //   {
  //     title: "Mademoiselle",
  //     mainImage: "https://via.placeholder.com/600/774321",
  //     albumId: "10",
  //   },
  //   {
  //     title: "Aloha",
  //     mainImage: "https://via.placeholder.com/600/53e006",
  //     albumId: "11",
  //   },
  //   {
  //     title: "Ti-Punch",
  //     mainImage: "https://via.placeholder.com/600/3af4b9",
  //     albumId: "12",
  //   },
  //   {
  //     title: "Planteur",
  //     mainImage: "https://via.placeholder.com/600/affe00",
  //     albumId: "13",
  //   },
  //   {
  //     title: "Mai Tai",
  //     mainImage: "https://via.placeholder.com/600/d6dd28",
  //     albumId: "14",
  //   },
  //   {
  //     title: "Tropiques",
  //     mainImage: "https://via.placeholder.com/600/e8c4d1",
  //     albumId: "15",
  //   },
  //   {
  //     title: "Long Island",
  //     mainImage: "https://via.placeholder.com/600/fb4137",
  //     albumId: "16",
  //   },
  // ];

  const url = "https://jsonplaceholder.typicode.com/albums/1/photos?albumId=1"
  function fetchAlbum(){
    axios.get(url).then((response) => {
      setAlbum(response.data)
    })
  }
  const [albums, setAlbum] = useState([]);

  useEffect(fetchAlbum, []);

  return (
    <>
      {albums.map((photo) => {
        if (photo.albumId === parseInt(params.id, 10)) {
          return (
              <AlbumTheory key={photo.title} album={photo} />            
          );
        }else{ return("")}
      })}
    </>
  );
}

export default Album;
