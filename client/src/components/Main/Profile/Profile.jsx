import React, {useState, useEffect, useContext} from "react";
import { userContext } from "../../../context/userContext";
import axios from "axios";


const Profile = () => {

  const { loggedUser } = useContext(userContext)
  const { updateLoggedUser, setLoggedUser } = useContext(userContext);
  const [userProfile, setUserProfile] = useState("")



  useEffect(() => {
    const userInfo = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `http://localhost:3000/api/user/username?username=${loggedUser.username}`, //http://localhost:3000/api/favorites/username?username=bolito
          
        });
        if (response.status === 200) {
          const userData = response.data;
          console.log(userData)
          setUserProfile(userData)
          
        }
  
      } catch (error) {
        console.log(error.message);
      }
  
    }
    userInfo();
  },[])





  return <>
  <article className="profileCard">
    <img src={userProfile[0].img}></img>
    <h1>{userProfile[0].username}</h1>
    <h2>{userProfile[0].email}</h2>
    <h3>hola</h3>

    </article>
    </>
};

export default Profile;
