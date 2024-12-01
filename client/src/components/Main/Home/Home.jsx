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
  <section className="homeBanner">
  <h1>Madrid Venues</h1>
  <h2> Your platform for the best music and shows in Madrid</h2>
  </section>




  <section>

  <Button onClick={handleLoginClick}>Already have an account? </Button>
  <Button onClick={handleRegisterClick}>Unlock the whole experience </Button>
  </section>
  </>;
};

export default Home;
