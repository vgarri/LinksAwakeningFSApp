import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from "./Login/Login";
import Register from "./Register/Register";
import Map from "./Map/Map";
import Search from "./Search/Search";
import Profile from "./Profile/Profile"
import Events from "./Events/Events"
const Main = () => {
  return <>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/map" element={<Map />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/events" element={<Events />} />
      <Route path="/*" element={<Navigate to={'/'} />} />
    </Routes>

  </>
};

export default Main;
