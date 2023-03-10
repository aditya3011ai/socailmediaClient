import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'
const Home = () => {

  return <>
  <Navbar />
  <div style={{marginTop:"60px"}}> 
    <Outlet/>
    </div>
 
  </>;
};

export default Home;
