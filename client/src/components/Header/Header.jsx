import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { userContext } from "../../context/userContext";
import axios from "axios";
const Header = () => {
    const { loggedUser } = useContext(userContext)
    const {updateLoggedUser, setLoggedUser} = useContext(userContext);

    const handleLogout = async () => {
        try {
            await axios({
                method: 'get',
                url: 'api/users/'
            });

            alert(`See You soon ${loggedUser.username}!`)
            setLoggedUser("");
            //   props.logged.setLogged(false);
        } catch (error) {
            console.log(error.message);
        }
    };


    return <>
        <section className="loginVisor">
            {loggedUser.username !="" ?  <>
            <p>You're logged-in as: {loggedUser.username}</p>
            <article className="botonera">
                <button onClick={handleLogout}>Log Out</button>
            </article> 
            </>
            : ""}
           
        </section>

        <nav className='nav_generic'>
            <ul className='nav'>

                <li className="nav-link active"><Link to='/register'>Register</Link></li>
                <li className="nav-link active"><Link to='/login'>Login</Link></li>
                <li className="nav-link active"><Link to='/map'>Map</Link></li>
                <li className="nav-link active"><Link to='/map'>Venues</Link></li>
                <li className="nav-link active"><Link to='/map'>Upcoming Concerts</Link></li>
                <li className="nav-link active"><Link to='/map'>Profile</Link></li>
            </ul >
        </nav >
    </>
};

export default Header;
