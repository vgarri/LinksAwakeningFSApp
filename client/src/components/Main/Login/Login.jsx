import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { userContext } from "../../../context/userContext";
import { useNavigate } from "react-router-dom";

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
                if(request.data > 0){
                    console.log("connected to server")
                };
            } catch (error) {
                console.log(error.message);
            }
        }
        testConnection();
    }, [])


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
                // alert(`Welcome Back, ${username}!`)
                updateLoggedUser({
                    username: username,
                    password: password
                });
                setMessage(`Welcome back, ${username}!`);
                setTimeout(() => setMessage(""), 3000);

                setUsername("");
                setPassword("");

                // useNavigate("/map")
            }
            // if (response.status === 400) {
            //     alert(`Wrong credentials`)
            // }

            const authHeader = response.headers.authorization;

            axios.defaults.headers.common['Authorization'] = authHeader;

            // setMessage(`Authorisation Header ${authHeader}`);

        } catch (error) {
            // alert(`Wrong credentials`)
            setMessage(`Wrong credentials`);
            setTimeout(() => setMessage(""), 3000);
            console.log(error.message);
        }
    };




    return <div className="loginForm">
        <input type="text" placeholder="username" onChange={handleUsername} />
        <input type="password" placeholder="password" onChange={handlePassword} />
        {message ? <article className="messageFlag">
        {passwordMessage ? <span>{passwordMessage}</span> : ""}
        <span>{message}</span>
        </article> : ""}
        
        <article className="botonera">
            <button onClick={handleLogin}>Login</button>
        </article>

    </div>;

};

export default Login;
