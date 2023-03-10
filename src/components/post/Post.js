import React from "react";
import Avatar from "../avatar/Avatar";
import "./post.scss";
import natureImg from "../../assets/nature.jpg";
import { AiOutlineHeart } from "react-icons/ai";
const Post = () => {
  return (
    <div className="Post">
      <div className="heading">
        <Avatar />
        <h4>Aditya</h4>
      </div>
      <div className="content">
        <img src={natureImg} />
      </div>
      <div className="footer">
        <div className="like">
        <AiOutlineHeart  className="icon hover-link"/>
        <h4>4 Likes</h4>
        </div>
        <p className="caption">lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy eirmod tempore lorem is aifw 
        </p>
        <h6 className="time-ago">4hrs ago</h6>
      </div>
    </div>
  );
};

export default Post;
