import React from "react";

function AlbumTheory({ album }) {
  return (
    <>
      <div className="album section">
        <h1 className="solo-album-title">{album.title}</h1>
        <div className="solo-album-mainimage">
          <img src={album.mainImage} alt={album.albumId} />
        </div>
        <p className="solo-album-info">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius nobis
          natus quos dolorem accusamus, mollitia tempora ea voluptatum voluptas
          ut quaerat obcaecati! Non consequatur est quam perspiciatis quia illo
          mollitia in minima, suscipit placeat sed aliquam temporibus, veritatis
          dicta vel eveniet saepe totam nulla. Libero voluptatum eum dolorem
          ipsum laborum.
        </p>
      </div>
    </>
  );
}

export default AlbumTheory;
