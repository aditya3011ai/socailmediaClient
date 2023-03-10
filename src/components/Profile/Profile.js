import React from 'react'
import './profile.scss'
import Post from '../post/Post'
import Img from '../../assets/user.png'
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className='Profile'>
      <div className='container'>
        <div className='left-part'>
          <Post/>
          <Post/>
        </div>
        <div className='right-part'>
          <div className='profile-card'>
            <img className='user-image' src={Img}/>
            <h3>Aditya</h3>
            <div className='follower-info'>
              <h4>40 Following</h4>
              <h4>100 Followers</h4>
            </div>
            <button className='follow-btn primary-btn '>
              Follow
            </button>
            <button className='update-btn secondary-btn' onClick={()=>navigate('/updateProfile')}>
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile