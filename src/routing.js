import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Footer from "./Pages/Footer";
import Header from "./Pages/header";
import Live from "./Pages/live";
import Mainpage from "./Pages/mainpage";
import Menu1 from "./Pages/menu1";


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/live" element={<Live />}></Route>
        <Route path="/mainpage" element={<Mainpage />}></Route>
        <Route path="/menu1" element={<Menu1 />}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
