import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';



const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login')

  }
  const handleRegisterClick = () => {
    navigate('/register')

  }

  return <>
    <div className="hero">
      <section className="homeBanner">
        <article>
        <h1>MADRID</h1>
        <h1>VENUES</h1>
        </article>
        <article>
        <h3>YOUR PLATFORM FOR THE BEST MUSIC AND SHOWS IN MADRID</h3>
        </article>
      </section>

      <section className="botoneraHome">

        <a className="homeLink" onClick={handleLoginClick}>ALREADY HAVE AN ACCOUNT? LOG IN </a>
        <a className="homeLink" onClick={handleRegisterClick}>SIGN UP AND UNLOCK THE WHOLE EXPERIENCE! </a>
      </section>
    </div>
  </>;
};

export default Home;
