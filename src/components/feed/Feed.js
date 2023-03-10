import React from "react";
import Follower from "../follower/Follower";
import Post from "../post/Post";
import "./feed.scss";
const Feed = () => {
  return (
    <div className="Feed">
      <div className="container">
        <div className="left-side">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="right-side">
          <div className="following">
            <h3 className="title">You are following</h3>
            <Follower/>
            <Follower/>
            <Follower/>
          </div>
          <div className="suggestions">
            <h3 className="title">Might Want to Follow</h3>
            <Follower/>
            <Follower/>
            <Follower/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
