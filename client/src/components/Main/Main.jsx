import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from "./Login/Login";
import Register from "./Register/Register";
import Map from "./Map/Map";
const Main = () => {
  return <>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/map" element={<Map />} />
      <Route path="/*" element={<Navigate to={'/'} />} />
    </Routes>

  </>
};

export default Main;
