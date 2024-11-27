import React, { useState, useEffect } from "react";
import axios from 'axios';

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");

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
        url: 'http://localhost:3000/api/user/',
        data: { username, email, password, img }
    
      });
      if (request.status === 201) {
        setMessage(`user: ${email} was successfully registered`);
        setTimeout(() => setMessage(""), 3000);
      }
      setMessage(request.data.msg);
    } catch (error) {
      console.log(error.message)
    }
  };




//username, email, password, img

  return <div className="register">
<input type="text" placeholder="username" onChange={handleUsername} /><br/>
<input type="text" placeholder="email" onChange={handleEmail} /><br/>
<input type="password" placeholder="password" onChange={handlePassword} /><br/>
<input type="text" placeholder="img" onChange={handleImg} /><br/>


<button onClick={handleRegister}>Register</button><br/>
{emailMessage ? <span>{emailMessage}</span> : ""}<br/>
{passwordMessage ? <span>{passwordMessage}</span> : ""}<br/>
<span>{message}</span><br/>
</div>;

};

export default Register;


