import * as React from 'react';
import { useState, useEffect, useContext } from "react";
import { userContext } from "../../../context/userContext";
import axios from "axios";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import FavCard from "./FavCard/FavCard";
import { v4 as uuidv4 } from "uuid";
import { Navigate, useNavigate } from 'react-router-dom';


const Profile = () => {
  const navigate = useNavigate();
  const { loggedUser } = useContext(userContext)
  const { updateLoggedUser, setLoggedUser } = useContext(userContext);
  const [userProfile, setUserProfile] = useState(null);
  const [userFavs, setUserFavs] = useState([]);
  const renderFavs = () => {
    return userFavs.map((fav, i) => <FavCard data={fav} key={uuidv4()} />);
  }
  if(loggedUser.username == ""){ //para evitar el error de cuando te dejas la pagina en profile y haces cambios
    navigate('/home')
  }






  useEffect(() => {
    const userInfo = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `https://salasapp.onrender.com/api/user/username?username=${loggedUser.username}`, //https://salasapp.onrender.com/api/favorites/username?username=bolito

        });
        if (response.status === 200) {
          const userData = await response.data;
          console.log(userData)
          setUserProfile(userData)

        }

      } catch (error) {
        console.log(error.message);
      }

    }
    userInfo();
  }, []) //  loggedUser.username cada vez que se loguee un nuevo user cambia este estado y por tanto el useEffect se ejecuta otra vez

  useEffect(() => {
    const getUserFavorites = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `https://salasapp.onrender.com/api/favorites/username?username=${loggedUser.username}`, //https://salasapp.onrender.com/api/favorites/username?username=bolito

        });
        if (response.status === 200) {
          const storedFavs = await response.data;
          console.log(storedFavs)
          setUserFavs(storedFavs);

        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getUserFavorites();
  }, [loggedUser.username]);



  if (!userProfile) { //spinner porque tarda en cargar a veces la info del perfil y petaba
    return <>
      <article className='spinnerDiv'>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="success" />

        </Stack>
      </article>
    </>;

  };


  return <>
    <section className='favList'>
    <Card sx={{ width: 400, my: '8px' }}>
      <CardContent>

        <h3>Profile</h3>
        <article className='avatarDiv'>
          <Avatar
            src={userProfile[0].img ||"https://i.ibb.co/K9sd9rj/descarga.jpg"}

            sx={{ width: 200, height: 200 }}
          />
        </article>
        <article className='profileText'>
        <h1>{userProfile[0].username}</h1>
        <h2>{userProfile[0].email}</h2>
        <h3></h3>
        </article>
        <article className="botonera">
          <button>Edit Profile</button>
        </article>
      </CardContent>
    </Card>
    </section>
    <section className='favList'>
      <h2>✨Your favorites: </h2>
      {userFavs.length != 0 ? renderFavs() : ""}
    </section>
  </>
};

export default Profile;
