import React, {useState, useEffect} from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import {v4 as uuidv4} from "uuid";
import PopupCard from "./PopupCard/PopupCard";

const Map = () => {
  const markers=[[51.505, -0.09],[51.505, -0.1],[51.506, -0.09]]
  
  // const [markers, setMarkers] = useState("");
  const [favorites, setFavorites] = useState("");
  const renderMarkers = () => {
    return markers.map((marker, i) => <>
                                        <Marker position={[marker[0],marker[1]]} key={uuidv4()}>
                                          <Popup>
                                           <PopupCard favorite={favoriteMarker} unfavorite={unfavoriteMarker}/>
                                          </Popup>
                                        </Marker> 
                                      </>);
  }
  
  const favoriteMarker = (i) => {
    const favorites = 1;
    setFavorites(favorites)
    alert(`marcador: ${1} guardado como favorito`)
   }
  const unfavoriteMarker =(i) => {
    const favorites = -1;
    setFavorites(favorites)
    alert(`marcador: ${1} borrado de favoritos`)
  }






  return <>
  <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: "100vh", width: "1280px" }}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {renderMarkers()}
</MapContainer>
</>
};

export default Map;
