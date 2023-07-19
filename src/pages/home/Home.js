import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'
import { useDispatch } from 'react-redux';
import { getMyInfo } from './../../redux/slices/appConfig';
import { KEY_ACCESS_TOKEN, getItem } from "../../utils/localStorageManager";
const Home = () => {
  const dispatch = useDispatch();
  const user = getItem(KEY_ACCESS_TOKEN);

  useEffect(() => {
    dispatch(getMyInfo())
  }, [dispatch])

  return (user? <>
  <Navbar />
  <div style={{marginTop:"60px"}}> 
    <Outlet/>
    </div>
  </>:<Navigate to='/login'/>)
};

export default Home;
