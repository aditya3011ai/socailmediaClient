import React from "react";
import "./profile.scss";
import Post from "../post/Post";
import Img from "../../assets/user.png";
import { useNavigate, useParams } from "react-router";
import CreatePost from "../createPost/CreatePost";
import { useDispatch,useSelector} from "react-redux";
import { getUserProfile } from "../../redux/slices/postSlice";
import { useEffect,useState } from "react";
import { followAndUnfollowUser } from "../../redux/slices/feedslice";

const Profile = () => {
  const navigate = useNavigate();
  const params = useParams();
  const userProfile = useSelector((state) => state.postsReducer.userProfile);
  const myProfile = useSelector((state) => state.appConfigReducer.myProfile);
  const feedData = useSelector((state) => state.feedDataReducer.feedData);
  const [isMyProfile, setIsMyProfile] = useState()
  const [isFollowing, setIsFollowing] = useState();
  const dispatch = useDispatch();
  useEffect(()=>{
    setIsFollowing(
      feedData?.followings?.find((item) => item._id === params.userId)
  );
    dispatch(getUserProfile({
      userId:params.userId,
    }));
    setIsMyProfile(myProfile?._id === params.userId);
  },[feedData])
  const handleFollow = ()=>{
    dispatch(followAndUnfollowUser({
      userIdtoFollow: userProfile._id
      }))
      setIsFollowing(!isFollowing)
  }
  return (
    <div className="Profile">
      <div className="container">
        <div className="left-part">
        { isMyProfile && <CreatePost className="create-post" />}
          {userProfile?.posts?.map((post) => (
                      <Post key={post._id} post={post} mypost={myProfile}/>
                      
          ))}
        </div>
        <div className="right-part">
          <div className="profile-card">
            <img className="user-image" src={userProfile?.avatar?.url ? userProfile?.avatar?.url:Img} alt="user" />
            <h3 className='user-name'>{userProfile?.name}</h3>
            <div className="follower-info">
              <h4>{`${userProfile?.followers?.length} Followers`}</h4>
              <h4>{`${userProfile?.followings?.length} Followings`}</h4>
            </div>
            {!isMyProfile &&
            <button className={isFollowing ? "secondary-btn" : "primary-btn"} onClick={handleFollow}>
                {isFollowing ? "Unfollow" : "Follow"}
                </button>}
            {isMyProfile &&
            <button
              className="update-btn secondary-btn"
              onClick={() => navigate("/updateProfile")}
            >
              Update Profile
            </button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
