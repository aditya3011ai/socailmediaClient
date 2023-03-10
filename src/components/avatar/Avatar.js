import React from 'react'
import AvatarImg from '../../assets/user.png'
import './avatar.scss'
const Avatar = ({src}) => {
  return (
    <div className='Avatar'>
    <img src={src?src:AvatarImg} alt='User Image'/>
    </div>
  )
}

export default Avatar