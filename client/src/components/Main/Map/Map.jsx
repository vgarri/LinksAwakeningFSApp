import React, {useState, useEffect, useContext} from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import {v4 as uuidv4} from "uuid";
import PopupCard from "./PopupCard/PopupCard";
import axios from "axios";
import Footer from "../../Footer/Footer";
import { userContext } from "../../../context/userContext";

const Map = () => {
  // const markers=[[40.4168, -3.7038],[40.4178, -3.7030],[40.4237, -3.7034]] //pruebas
  
  const [markers, setMarkers] = useState([]);
  const [newFavorite, setNewFavorite] = useState("");
  const {loggedUser} = useContext(userContext)
  
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
                                           <PopupCard username={loggedUser.username} data={marker} key={uuidv4()} index={i}/>
                                          </Popup>
                                        </Marker> 
                                      </>);
  }




  return <>
  <MapContainer  center={[40.4168, -3.7038]} zoom={13} scrollWheelZoom={false} style={{ height: "100vh", width: "100%" }}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {renderMarkers()}
</MapContainer>
<Footer />
</>
};

export default Map;
