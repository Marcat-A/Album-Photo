import React from "react";
import GreatestCard from "./GreatestCard";

function GreatestPhoto() {
  const greatest = [
    {
      name: "Vamos Allaplaya",
      img: "https://via.placeholder.com/600/392537",
      likes: "10",
      album: "Planteur",
    },
    {
      name: "Me gusta Bailar",
      img: "https://via.placeholder.com/600/c29554",
      likes: "10",
      album: "Zombie",
    },
    {
      name: "Bailar Conmigo",
      img: "https://via.placeholder.com/600/c29554",
      likes: "10",
      album: "Mojito",
    },
    {
      name: "La Parmiggiano",
      img: "https://via.placeholder.com/600/132608",
      likes: "10",
      album: "Pina Colada",
    },
    {
      name: "Quando potato",
      img: "https://via.placeholder.com/600/95773a",
      likes: "10",
      album: "Mai Tai",
    },
    {
      name: "Pololo Niloco",
      img: "https://via.placeholder.com/600/5fa0cb",
      likes: "10",
      album: "Bahama",
    },
    {
      name: "Tigun Bolalo",
      img: "https://via.placeholder.com/600/95773a",
      likes: "10",
      album: "Mai Tai",
    },
    {
      name: "Mucho Desgusto",
      img: "https://via.placeholder.com/600/5fa0cb",
      likes: "10",
      album: "Bahama",
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
