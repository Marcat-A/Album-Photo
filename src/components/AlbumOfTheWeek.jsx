import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

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
          <h1 className="title"><FormattedMessage id="albumOfTheWeek.title" defaultMessage="Album de la semaine" /></h1>
          {list.map((item) => (
            <p className="album-item" key={item}>
              {item}
            </p>
          ))}
          <Link to={"/albums/1"}>
            <button className="btn"><FormattedMessage id="albumOfTheWeek.btn" defaultMessage="Regarder" /></button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AlbumOfTheWeek;
