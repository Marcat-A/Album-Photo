import React from "react";

function AlbumsCard({ album, pt }) {
  return (
    <div className="album-card">
      <div className="custom-image album-image" style={{ paddingTop: pt }}>
        <img src={album.image} alt={album.key} />
      </div>
      <div className="album-card-info">
        <p className="album-title">{album.title}</p>
        <p className="album-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quam
          possimus quas nesciunt natus placeat in enim culpa vero nulla.
        </p>
        <a href="#!" className="view-btn">
          Voir l'album
        </a>
      </div>
    </div>
  );
}

export default AlbumsCard;
