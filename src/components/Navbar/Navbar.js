import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setLoading} from '../../redux/slices/appConfig'
import Avatar from "../avatar/Avatar";
import "./navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myProfile = useSelector(state=>state.appConfigReducer.myProfile);
  
  const handleLogout = ()=> {
      dispatch(setLoading(true));  
  }
  return (
    <div className="Navbar">
      <div className="container">
        <h1 className="banner hover-link" onClick={() => navigate("/")}>
          Social Media
        </h1>
        <div className="right-side">
          <div
            className="profile hover-link"
            onClick={() => navigate(`/profile/${myProfile?._id}`)}
          >
            <Avatar src={myProfile?.avatar?.url} />
           
          </div>
          <div className="logout hover-link" onClick={handleLogout}>
              <AiOutlineLogout />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
