import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'
import { useDispatch } from 'react-redux';
import { getMyInfo } from './../../redux/slices/appConfig';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyInfo())
  }, [])
  
  return <>
  <Navbar />
  <div style={{marginTop:"60px"}}> 
    <Outlet/>
    </div>
 
  </>;
};

export default Home;
