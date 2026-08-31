import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../components/Footer";




const Layout = () => {
  return (
    <div>
      

      <Navbar />
      <Outlet />
      <Footer />


      
    </div>
  );
};

export default Layout;
