import React from "react";
import GreatestCard from "./GreatestCard";

function GreatestPhoto() {
  const greatest = [
    {
      name: "Vamos Allaplaya",
      img: "https://via.placeholder.com/600/392537",
      likes: "10",
      album: "Mojito",
    },
    {
      name: "Me gusta Bailar",
      img: "https://via.placeholder.com/600/c29554",
      likes: "10",
      album: "Daïquiri",
    },
    {
      name: "Bailar Conmigo",
      img: "https://via.placeholder.com/600/c29554",
      likes: "10",
      album: "Piña Colada",
    },
    {
      name: "La Parmiggiano",
      img: "https://via.placeholder.com/600/132608",
      likes: "10",
      album: "Caïpirinha",
    },
    {
      name: "Quando potato",
      img: "https://via.placeholder.com/600/95773a",
      likes: "10",
      album: "Zombie",
    },
    {
      name: "Pololo Niloco",
      img: "https://via.placeholder.com/600/5fa0cb",
      likes: "10",
      album: "Julep",
    },
    {
      name: "Tigun Bolalo",
      img: "https://via.placeholder.com/600/95773a",
      likes: "10",
      album: "El Presidente",
    },
    {
      name: "Mucho Desgusto",
      img: "https://via.placeholder.com/600/5fa0cb",
      likes: "10",
      album: "Punch Cubain",
    },
  ];
  return (
    <div className="section photo">
      <h1 className="title">Les clichés les mieux notés</h1>
      <div className="greatest-container">
        {greatest.map((great) => (
          <GreatestCard key={great.name} great={great} />
        ))}
      </div>
    </div>
  );
}

export default GreatestPhoto;
