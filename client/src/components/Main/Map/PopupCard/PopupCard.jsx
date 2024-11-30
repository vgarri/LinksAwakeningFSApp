import React, { useContext, useState, useEffect } from "react";
import { userContext } from "../../../../context/userContext";
import axios from "axios";

const PopupCard = ({ data, index }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { loggedUser } = useContext(userContext)
  // const [favorite, setFavorite] = useState({
  //   username: "",
  //   marker_title: ""
  // });
  const [favorites, setFavorites] = useState([]);
  const addFavorite = (newFav) => {
    setFavorites((prevFavorites) => [...prevFavorites, newFav]); // Agrega un nuevo favorito al array
  };
  const removeFavorite = (FavToRemove) => {
    const FavoritesNewArray = favorites.filter((favorite=> favorite.marker_title !== FavToRemove.marker_title))
    setFavorites(FavoritesNewArray)
  }



  const markAsFavorite = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/api/favorites',
        data: {
          username: loggedUser.username,
          marker_title: data.marker_title
        }

      });
      if (response.status === 201) {
        alert(`marker: ${data.marker_title} was successfully marked as favorite`)

      }

    } catch (error) {
      console.log(error.message);
    }

  }
  const unmarkAsFavorite = async () => {
    try {
      const response = await axios({
        method: 'delete',
        url: `http://localhost:3000/api/favorites/marker?username=${loggedUser.username}&marker_title=${data.marker_title}`,
      });
      if (response.status === 200) {
        alert(`marker: ${data.marker_title} was successfully deleted from favorites`)

      }

    } catch (error) {
      console.log(error.message);
    }
  };
  const handleFavorite = () => {
    addFavorite({
      username: loggedUser.username,
      marker_title: data.marker_title
    })
    markAsFavorite();
  };



  const handleUnFavorite = async () => {
    removeFavorite({  
      username: loggedUser.username,
      marker_title: data.marker_title
    })
    unmarkAsFavorite();
  }
useEffect(() => {
  const FavCheck = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:3000/api/favorites/username?username=${loggedUser.username}`, //http://localhost:3000/api/favorites/username?username=bolito

      });
      if (response.status === 200) {
        const userFavs = response.data;
        if (userFavs.some(favorite => favorite.marker_title === data.marker_title)) {
          setIsFavorite(true); 
        } else {
          setIsFavorite(false);
        }
      }

    } catch (error) {
      console.log(error.message);
    }

  }
  FavCheck();
},[favorites])
  //--------comprobacion si esta o no en favs
  // const favoriteCheck = async () => { // aqui se hace un get y se comprueba
  //   setNewFavorite({
  //     username: loggedUser.username,
  //     marker_title: data.marker_title
  //   })
  //   try {
  //     const response = await axios({
  //       method: 'delete',
  //       url: `http://localhost:3000/api/favorites/marker?username=${loggedUser.username}&marker_title=${data.marker_title}`,
  //     });
  //     if (response.status === 200) {
  //       alert(`marker: ${data.marker_title} was successfully deleted from favorites`)

  //     }

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  //}
  console.log(favorites)

  return <section className="popUpCard">

    <article className="miniHeader">
      {loggedUser.username != "" ? <>
        {isFavorite ? <button className="unfav" onClick={() => handleUnFavorite()}><span>💔</span></button>
          : <button className="fav" onClick={() => handleFavorite()}><span>❤️</span></button>}
      </>
        : ""}

    </article>
    <h2>{data.marker_title}</h2>
    <h3>{data.type}</h3>
    <h4>Address: {data.address}</h4>
    <article className="botonera">
      <button onClick={() => window.open(`${data.url}`, '_blank')} ><span>See more</span></button>
    </article>
  </section>
};

export default PopupCard;
//username viene de un context data viene de un fetch a mi api