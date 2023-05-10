import React from "react";
import Avatar from "../avatar/Avatar";
import "./post.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { likeAndUnlikePost } from "../../redux/slices/postSlice";
import { useNavigate } from "react-router";
const Post = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postId = post?._id;
  const handlePostLiked = async () => {
    dispatch(
      likeAndUnlikePost({
        postId,
      })
    );
  };
  console.log("this is", post);
  return (
    <div className="Post">
      <div
        className="heading"
        onClick={() => navigate(`/profile/${post?.owner?._id}`)}
      >
        <Avatar src={post?.owner?.avatar?.url} />
        <h4>{post?.owner?.name}</h4>
      </div>
      <div className="content">
        <img src={post?.image?.url} alt="" />
      </div>
      <div className="footer">
        <div className="like" onClick={handlePostLiked}>
          {post?.isLiked ? (
            <AiFillHeart style={{ color: "red" }} className="icon" />
          ) : (
            <AiOutlineHeart className="icon hover-link" />
          )}
          <h4>{`${post?.likesCount} likes`}</h4>
        </div>
        <p className="caption">{post?.title || post?.caption}</p>
        <h6 className="time-ago">{post?.timeAgo} </h6>
      </div>
    </div>
  );
};

export default Post;
