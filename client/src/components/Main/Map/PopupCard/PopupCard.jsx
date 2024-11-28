import React from "react";

const PopupCard = ({favorite, unfavorite}) => {
  return <>
    <h1>Marcador</h1>
    <h2>:)</h2>
    <button onClick={favorite}><span>❤️</span></button>
    <button onClick={unfavorite}><span>💔</span></button>
    </>;
};

export default PopupCard;
