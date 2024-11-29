import React from "react";

const PopupCard = ({favorite, unfavorite, data}) => {
  return <>
    <h2>{data.marker_title}</h2>
    <h3>{data.type}</h3>
    <h3>Address: {data.address}</h3>
    <button onClick={favorite}><span>❤️</span></button>
    <button onClick={unfavorite}><span>💔</span></button>
    </>;
};

export default PopupCard;
//username viene de un context data viene de un fetch a mi api