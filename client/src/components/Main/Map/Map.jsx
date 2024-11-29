import React, {useState, useEffect} from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import {v4 as uuidv4} from "uuid";
import PopupCard from "./PopupCard/PopupCard";
import axios from "axios";

const Map = () => {
  // const markers=[[40.4168, -3.7038],[40.4178, -3.7030],[40.4237, -3.7034]]
  
  const [markers, setMarkers] = useState([]);
  const [favorites, setFavorites] = useState("");
  
  useEffect(() => {
    const getMarkers = async () => {
      try {
        const resp = await axios.get(`http://localhost:3000/api/marker`)
        console.log(resp.data)
        setMarkers(resp.data)
        
      } catch (err) {
        console.log(err)
      }
  
    }
  
    getMarkers();
  }, []);

  const renderMarkers = () => {
    return markers.map((marker, i) => <>
                                        <Marker position={[marker.lat,marker.long]} key={uuidv4()}>
                                          <Popup>
                                           <PopupCard username={"ChetoReact"} data={marker} favorite={favoriteMarker} unfavorite={unfavoriteMarker}/>
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
  <MapContainer center={[40.4168, -3.7038]} zoom={13} scrollWheelZoom={false} style={{ height: "100vh", width: "1280px" }}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {renderMarkers()}
</MapContainer>
</>
};

export default Map;
