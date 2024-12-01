import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import { userContext } from "../../context/userContext";
import axios from "axios";
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';



const Header = () => {




    const navigate = useNavigate();
    const { loggedUser } = useContext(userContext)
    const { updateLoggedUser, setLoggedUser } = useContext(userContext);
    const [logoutMessage, setLogoutMessage] = useState("");

    const handleLogout = async () => {
        try {
            await axios({
                method: 'get',
                url: 'api/user/logout'
            });
            setLogoutMessage(`See You soon ${loggedUser.username}!`)
            setTimeout(() => setLogoutMessage(""), 2000);
            // alert(`See You soon ${loggedUser.username}!`)
            updateLoggedUser({
                username: "",
                password: ""
            });
            navigate('/map')
            //   props.logged.setLogged(false);
        } catch (error) {
            console.log(error.message);
        }
    };




        return <>
            <section className="loginVisor">
                {loggedUser.username != "" ? <>
                    <p>You're logged-in as: {loggedUser.username}</p>
                    <article className="botonera">
                        <button onClick={handleLogout}>Log Out</button>
                    </article>
                </>
                    : ""}

            </section>
            <section className="alertVisor">
                {logoutMessage != "" ?
                    <Alert variant="filled" severity="success">{logoutMessage}</Alert>
                    : ""}
            </section>
            

            <nav className='nav_generic'>
                <ul className='nav'>
                    <li className="nav-link active"><Link to='/home'><HomeIcon/></Link></li>
                    <li className="nav-link active"><Link to='/profile'><AccountCircleIcon/></Link></li>
                    <li className="nav-link active"><Link to='/map'><MapTwoToneIcon/></Link></li>
                    <li className="nav-link active"><Link to='/search'><SearchTwoToneIcon/></Link></li>
                    <li className="nav-link active"><Link to='/events'><CalendarMonthTwoToneIcon/></Link></li>
                    

                </ul >
            </nav >
        </>
    };

    export default Header;
