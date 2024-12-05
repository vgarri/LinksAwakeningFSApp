import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { userContext } from "../../../context/userContext";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");
  const { loggedUser } = useContext(userContext)
  const { updateLoggedUser, setLoggedUser } = useContext(userContext);

  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");



  useEffect(() => {
    const testConnection = async () => {
      try {
        const request = await axios({
          method: 'get',
          url: 'api/test',
        })
        console.log(request.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    testConnection();
  }, [])

  useEffect(() => {
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailValidation.test(email) && email.length > 0) {
      setEmailMessage("Email must have a valid format");
    } else {
      setEmailMessage("");
    }
  }, [email])

  useEffect(() => {
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{9,}$/
    if (!passwordValidation.test(password) && password.length > 0) {
      setPasswordMessage("Password must contain lowecase, uppercase, digit and special character");
    } else {
      setPasswordMessage("");
    }
  }, [password])

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleImg = (e) => setImg(e.target.value)



  const handleRegister = async () => {
    try {
      const request = await axios({
        method: 'post',
        url: 'https://salasapp.onrender.com/api/user/',
        data: { username, email, password, img }

      });
      if (request.status === 201) {
        setMessage(`user: ${email} was successfully registered`);
        setTimeout(() => setMessage(""), 3000);
        setUsername("");
        setEmail("");
        setPassword("");
        setImg("");
        updateLoggedUser({
          username: username,
          password: password
        });
        navigate('/map')
      }
      setMessage(request.data.msg);
    } catch (error) {
      console.log(error.message)
    }
  };




  //username, email, password, img

  return <div className="loginForm">
    <section className="formHeader">
      <h1>Sign up</h1>
    </section>
    <input type="text" placeholder="username" onChange={handleUsername} />
    <input type="text" placeholder="email" onChange={handleEmail} />
    <input type="password" placeholder="password" onChange={handlePassword} />
    <input type="text" placeholder="img" onChange={handleImg} />

    <article className="botonera">
      <button onClick={handleRegister}>Register</button>
    </article>

    {message != "" || emailMessage != "" || passwordMessage != "" ? <article className="messageFlag">
      {emailMessage ? <Alert variant="filled" severity="info">{emailMessage}</Alert> : ""}
      {passwordMessage ? <Alert variant="filled" severity="warning">{passwordMessage}</Alert> : ""}
      {message ? <Alert variant="filled" severity="success">{message}</Alert> : ""}
    </article> : ""}
    {/* {emailMessage ? <span>{emailMessage}</span> : ""}<br />
    {passwordMessage ? <span>{passwordMessage}</span> : ""}<br />
    <span>{message}</span><br /> */}
  </div>;

};

export default Register;





