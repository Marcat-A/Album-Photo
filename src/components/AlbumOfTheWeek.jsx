import React from "react";

function AlbumOfTheWeek() {
  const list = [
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amey.",
    "Lorem ipsum dolor sit ameb.",
    "Lorem ipsum dolor sit ameg.",
    "Lorem ipsum dolor sit ameh.",
    "Lorem ipsum dolor sit amef.",
  ];
  return (
    <>
      <div className="section album-of-the-week">
        <div className="col img">
          <img src="https://via.placeholder.com/600/bfb73" alt=""></img>
        </div>
        <div className="col typography">
          <h1 className="title">Album de la semaine</h1>
          {list.map((item) => (
            <p className="album-item" key={item}>
              {item}
            </p>
          ))}
          <button className="btn">Regarder</button>
        </div>
      </div>
    </>
  );
}

export default AlbumOfTheWeek;
