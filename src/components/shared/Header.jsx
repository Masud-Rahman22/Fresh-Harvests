import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import bg from '../../assets/backgroundImage/Bg.png'

const Header = () => {
  return (
    <>
    <div className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}>
      <Navbar />
      <Banner />
    </div>
    </>
  );
};

export default Header;