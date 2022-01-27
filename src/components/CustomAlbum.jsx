import React from "react";

function CustomAlbum({ pt, album}) {

  return (
    <>
      <div
        className="custom-image"
        style={{ paddingTop: pt }}
      >
        <img src={album}></img>
      </div>
    </>
  );
}

export default CustomAlbum;
