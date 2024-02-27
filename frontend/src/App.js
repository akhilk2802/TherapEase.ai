import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Registration";
import GameComponent from "./components/GameComponent";
import { useState } from "react";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" Component={Register} />
          <Route path="/game" Component={GameComponent} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
