import React from "react";
import Follower from "../follower/Follower";
import Post from "../post/Post";
import "./feed.scss";
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getFeedData } from '../../redux/slices/feedslice';

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector(state => state.feedDataReducer.feedData)

  useEffect(() => {
    dispatch(getFeedData());
  }, [dispatch])

  return (
    <div className="Feed">
        <div className="container">
          <div className="left-part">
            {feedData?.posts?.map(post => <Post className='hover-link post' key={post._id} post={post} />)}
          </div>
          <div className="right-part">
            <div className="following">
              <h3 className="title hover-link">You Are Following</h3>
              {feedData?.followings?.map(user => <Follower className='hover-link' key={user._id} user={user}/>)}
            </div>
            <div className="suggestions">
              <h3 className="title">Suggested For You</h3>
              {feedData?.suggestions?.map(user => <Follower className='hover-link' key={user._id} user={user}/>)}
            </div>
          </div>
        </div>
    </div>
  )
}


export default Feed