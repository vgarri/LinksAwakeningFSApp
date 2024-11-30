import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { userContext } from "../../../context/userContext";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const {updateLoggedUser} = useContext(userContext);


    useEffect(() => {
        const testConnection = async () => {
            try {
                const request = await axios({
                    method: 'get',
                    url: 'http://localhost:3000/api/user/',
                })
                console.log(request.data);
            } catch (error) {
                console.log(error.message);
            }
        }
        testConnection();
    }, [])

    // useEffect(() => {
    //   const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    //   if (!emailValidation.test(email) && email.length > 0) {
    //     setEmailMessage("Email must have a valid format");
    //   } else {
    //     setEmailMessage("");
    //   }
    // }, [username])

    useEffect(() => {
        const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{9,}$/
        if (!passwordValidation.test(password) && password.length > 0) {
            setPasswordMessage("Password must contain lowecase, uppercase, digit and special character");
        } else {
            setPasswordMessage("");
        }
    }, [password])

    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);




    const handleLogin = async () => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:3000/api/user/login',
                data: { username, password },
                withCredentials: true
            });
            if (response.status === 200) {
                alert(`Welcome Back, ${username}!`)
                setMessage(`user: ${username} was successfully logged`);
                setTimeout(() => setMessage(""), 3000);
            }
            const authHeader = response.headers.authorization;

            axios.defaults.headers.common['Authorization'] = authHeader;
            updateLoggedUser({
                username: username,
                password: password
            });
            setMessage(`Authorisation Header ${authHeader}`);

        } catch (error) {
            console.log(error.message);
        }
    };




    return <div className="home">
        <input type="text" placeholder="username" onChange={handleUsername} /><br />
        <input type="password" placeholder="password" onChange={handlePassword} /><br />
        {passwordMessage ? <span>{passwordMessage}</span> : ""}
        <span>{message}</span>
        <article className="botonera">
            <button onClick={handleLogin}>Login</button>
        </article>

    </div>;

};

export default Login;
