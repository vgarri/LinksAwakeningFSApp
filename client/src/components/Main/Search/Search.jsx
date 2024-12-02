import React, {useState, useEffect} from "react";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import axios from "axios";
import MarkerCard from "./MarkerCard/MarkerCard"
import {v4 as uuidv4} from "uuid";

const Search = () => {
const [search, setSearch] = useState(false);
const [values, setValues] = useState("");
const [markers, setMarkers] = useState([]);

const renderMarkerCards = () => {
  return markers.map((marker, i) => <MarkerCard data={marker} key={uuidv4()} />);

}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log("hola")
  setSearch(true)
}
const handleChange = (e) => {//Funcion para handlear el estado. ...values spread op. e.target.name: e.target value
  setValues(e.target.value);
  setSearch(false);
}

useEffect(()=>{
  const getMarkersByType = async () => {
    
    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:3000/api/marker/type?type=${values}`,

      });
      if (response.status === 200) {
        const foundMarkers = response.data;
        setMarkers(foundMarkers)
        
        
      }

    } catch (error) {
      console.log(error.message);
    }

  }
getMarkersByType();
}, [search])


  return <>
    <section >
      <h1>Without plans for tonight?</h1>
    </section>

    <form onSubmit={handleSubmit}>

      <label htmlFor="name"></label><br />
      <input type="text" name="title" value={values} onChange={handleChange} placeholder="Rock, Electronic... "required></input>
      <article className="miniHeader">
      <button type="submit"><SearchTwoToneIcon/></button>
      </article>
    </form>
    <section className="markerList">
      {search ? renderMarkerCards() : ""}
    </section>
  </>;
};

export default Search;
