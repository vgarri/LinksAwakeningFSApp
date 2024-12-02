import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { userContext } from "../../../context/userContext";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

const Login = (props) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const {updateLoggedUser} = useContext(userContext);


    useEffect(() => {
        const testConnection = async () => {
            try {
                const request = await axios({
                    method: 'get',
                    url: 'http://localhost:3000/api/user/',
                })
                if(request > 0){
                    console.log("connected to server")
                };
            } catch (error) {
                console.log(error);
            }
        }
        testConnection();
    }, [])


    useEffect(() => {
        const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{9,}$/
        if (!passwordValidation.test(password) && password.length > 0) {
            setPasswordMessage("Password must contain lowercase, uppercase, digits and special character");
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
                setTimeout(() => setMessage(""), 2000);
                navigate('/map');
            }

            // const authHeader = response.headers.authorization;
            // axios.defaults.headers.common['Authorization'] = authHeader;
            // setMessage(`Authorisation Header ${authHeader}`);
        } catch (error) {
            setErrMessage(`Wrong credentials`);
            setTimeout(() => setErrMessage(""), 2000);
            console.log(errMessage)
            
            console.log(error);
        }
    };




    return <div className="loginForm">
        <input type="text" placeholder="username" onChange={handleUsername} />
        <input type="password" placeholder="password" onChange={handlePassword} />
        
        
        <article className="botonera">
            <button onClick={handleLogin}>Login</button>
        </article>
        {message !="" || errMessage !="" || passwordMessage !=""   ? <article className="messageFlag">
        {errMessage ? <Alert variant="filled" severity="error">{errMessage}</Alert>: "" }
        {passwordMessage ? <Alert variant="filled"severity="warning">{passwordMessage}</Alert> : ""}
        {message ? <Alert variant="filled" severity="success">{message}</Alert> : ""}
        
        </article> : ""}

    </div>;

};

export default Login;


