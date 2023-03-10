import React from 'react'
import Avatar from '../avatar/Avatar'
import './follower.scss'

const Follower = () => {
  return (
    <div className='Follower'>
        <div className='user-info'>
        <Avatar/>
        <h4 className='name'>Rohit</h4>
        </div>
       
        <h5 className='hover-link follow-link'>
            Follow
        </h5>
    </div>
  )
}

export default Follower