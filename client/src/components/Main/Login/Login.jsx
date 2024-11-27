// import React, { useState, useEffect } from "react";
// import axios from 'axios';

// const Login = (props) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [passwordMessage, setPasswordMessage] = useState("");
//   const [emailMessage, setEmailMessage] = useState("");

//   useEffect(() => {
//     const testConnection = async () => {
//       try {
//         const request = await axios({
//           method: 'get',
//           url: 'api/user',
//         })
//         console.log(request.data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     }
//     testConnection();
//   }, [])

//   // useEffect(() => {
//   //   const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//   //   if (!emailValidation.test(email) && email.length > 0) {
//   //     setEmailMessage("Email must have a valid format");
//   //   } else {
//   //     setEmailMessage("");
//   //   }
//   // }, [username])

//   useEffect(() => {
//     const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{9,}$/
//     if (!passwordValidation.test(password) && password.length > 0) {
//       setPasswordMessage("Password must contain lowecase, uppercase, digit and special character");
//     } else {
//       setPasswordMessage("");
//     }
//   }, [password])

//   const handleUsername = (e) => setUsername(e.target.value);
//   const handlePassword = (e) => setPassword(e.target.value);




//   const handleLogin = async () => {
//     try {
//       const response = await axios({
//         method: 'post',
//         url: 'api/users/login',
//         data: { username, password }
//       });
     
//       const authHeader = response.headers.authorization;
  
//       axios.defaults.headers.common['Authorization'] = authHeader;
//       props.logged.setLogged(true);
//       props.role.setRole(response.data.role);
//       setMessage(`Authorisation Header ${authHeader}`);

//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await axios({
//         method: 'get',
//         url: 'api/users/logout'
//       });
//       props.logged.setLogged(false);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };



//   return <div className="home">
//     <input type="email" placeholder="email" onChange={handleEmail} />
//     {emailMessage ? <span>{emailMessage}</span> : ""}
//     <input type="password" placeholder="password" onChange={handlePassword} />
//     {passwordMessage ? <span>{passwordMessage}</span> : ""}
//     <span>{message}</span>
    
//     <button onClick={handleLogin}>Login</button>
//   </div>;

// };

// export default Login;
