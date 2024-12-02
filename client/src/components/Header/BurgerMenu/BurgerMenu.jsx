import * as React from 'react';
import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { userContext } from '../../../context/userContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const BurgerMenu = () => {
  const navigate = useNavigate();
  const { loggedUser } = useContext(userContext)
  const { updateLoggedUser, setLoggedUser } = useContext(userContext);
  const [logoutMessage, setLogoutMessage] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
      navigate('/home')
      //   props.logged.setLogged(false);
    } catch (error) {
      console.log(error.message);
    }
  };




  return <>

    <section className="alertVisor">
      {logoutMessage != "" ?
        <Alert variant="filled" severity="success">{logoutMessage}</Alert>
        : ""}
    </section>
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <LogoutIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      > <MenuItem>
          <section className="loginVisor">
            {loggedUser.username != "" ? <>
              <p>You're logged-in as: {loggedUser.username}</p>
              <article className="botonera">
                <button onClick={handleLogout}>Log Out</button>
              </article>
            </>
              : ""}
          </section>
        </MenuItem>
        <MenuItem onClick={handleClose}></MenuItem>
      </Menu>
    </div>
  </>
}

export default BurgerMenu;







