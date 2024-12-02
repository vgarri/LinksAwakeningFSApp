import React, { useContext, useState, useEffect } from "react";
import { userContext } from "../../../../context/userContext";
import axios from "axios";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const PopupCard = ({ data, index }) => {
  
  const { loggedUser } = useContext(userContext)

  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false)
  const addFavorite = (newFav) => {
    setFavorites((prevFavorites) => [...prevFavorites, newFav]); // Agrega un nuevo favorito al array
  };
  const removeFavorite = (FavToRemove) => {
    const FavoritesNewArray = favorites.filter((favorite=> favorite.marker_title !== FavToRemove.marker_title))
    setFavorites(FavoritesNewArray)
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
        // alert(`marker: ${data.marker_title} was successfully marked as favorite`)
        setIsFavorite(true);
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
        // alert(`marker: ${data.marker_title} was successfully deleted from favorites`)
        setIsFavorite(false);
      }

    } catch (error) {
      console.log(error.message);
    }
  };
  const handleFavorite = async () => {
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



  return <section className="popUpCard">

    <article className="miniHeader">
      {loggedUser.username != "" ? <>
        {isFavorite ? <button className="unfav" onClick={handleUnFavorite}><FavoriteIcon/></button>
          : <button className="fav" onClick={handleFavorite}><FavoriteBorderIcon/></button>}
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