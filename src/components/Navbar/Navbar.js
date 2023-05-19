import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { KEY_ACCESS_TOKEN } from "../../utils/localStorageManager";
import { axiosClient } from "../../utils/axiosClient";
import { removeItem } from "../../utils/localStorageManager";
import Avatar from "../avatar/Avatar";
import "./navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const myProfile = useSelector(state=>state.appConfigReducer.myProfile);
  
  const handleLogout =async ()=> {
    try {
			await axiosClient.post('/auth/logout');
			removeItem(KEY_ACCESS_TOKEN);
			navigate('/login')
		} catch (e) {
			
		}
  }
  return (
    <div className="Navbar">
      <div className="container">
        <h1 className="banner hover-link" onClick={() => navigate("/")}>
          Digital Media
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
