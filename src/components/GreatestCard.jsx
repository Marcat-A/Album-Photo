import React from "react";

function GreatestCard({ great }) {
  return (
    <div className="greatest-card">
      <img src={great.img} alt="#!" key={great.name} />
      <div className="greatest-card-info">
        <h3 className="greatest-card-name">{great.name}</h3>
        <p className="greatest-card-count">
          Likes : <b>{great.likes}</b>
        </p>
        <p className="greatest-card-album">
          Album : <b>{great.album}</b>
        </p>
        <button className="btn">Voir</button>
      </div>
    </div>
  );
}

export default GreatestCard;
