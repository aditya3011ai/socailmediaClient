import React from "react";
import Avatar from "../avatar/Avatar";
import "./follower.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followAndUnfollowUser } from "../../redux/slices/feedslice";
import { useNavigate } from 'react-router-dom';

const Follower = ({ user }) => {
  const feedData = useSelector((state) => state.feedDataReducer.feedData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    setIsFollowing(feedData.followings.find((item) => item._id === user._id));
  }, [feedData,user]);

  const handleUserFollow = () => {
    dispatch(followAndUnfollowUser({
        userIdtoFollow: user._id
        }))
        setIsFollowing(!isFollowing)
  };

  return (
    <div className="Follower">
      <div className="user-info hover-link"onClick={() => navigate(`/profile/${user._id}`)}>
        <Avatar src={user?.avatar?.url} />
        <h4 className="name">{user?.name}</h4>
      </div>

      <h5
        className={isFollowing ? "hover-link follow-link" : "primary-btn"}
        onClick={handleUserFollow}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </h5>
    </div>
  );
};

export default Follower;
