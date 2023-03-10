import React, { useRef,useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import "./navbar.scss";
import LoadingBar from 'react-top-loading-bar'

const Navbar = () => {
  const navigate = useNavigate();
  const loadingRef = useRef()
  const [loading, setloading] = useState(false)
  const toggleLoading = ()=>{
    if(loading){
      setloading(false);
      loadingRef.current.complete();
    }else{
      setloading(true);
      loadingRef.current.continuousStart();
    }
  }
  return (
    <div className="Navbar">
      <LoadingBar color='#5f9fff' ref={loadingRef} />
      <div className="container">
        <h1 className="banner hover-link" onClick={() => navigate("/")}>
          Social Media
        </h1>
        <div className="right-side">
          <div
            className="profile hover-link"
            onClick={() => navigate("/profile/ee")}
          >
            <Avatar />
           
          </div>
          <div className="logout hover-link" onClick={toggleLoading}>
              <AiOutlineLogout />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
