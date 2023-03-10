import React from 'react'
import './updateProfile.scss'
import Img from '../../assets/user.png'
const UpdateProfile = () => {
  return (
    <div className='UpdateProfile'>
        <div className='container'>
            <div className='left-part'>
              <img src={Img} alt='' className='user-image' />
            </div>
            <div className='right-part'>
                <form>
                    <input placeholder='Your Name'
                    type='text'/>
                    <input placeholder='Your Bio'
                    type='text'/>
                    <input type='submit' className='primary-btn'/>
                </form>
                <button className='delete-account primary-btn'>Delete Profile</button>
            </div>
        </div>
    </div>
  )
}

export default UpdateProfile