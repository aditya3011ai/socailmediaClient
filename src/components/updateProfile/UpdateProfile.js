import React from 'react'
import './updateProfile.scss'
import Img from '../../assets/user.png'
import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { updateProfile } from '../../redux/slices/appConfig'
const UpdateProfile = () => {
  const myProfile = useSelector(state=>state.appConfigReducer.myProfile);
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [userImg, setUserImg] = useState(null)
  const dispatch = useDispatch();
  useEffect(() => {
    setName(myProfile?.name || "")
    setBio(myProfile?.bio || "")
    setUserImg(myProfile?.avatar?.url);
  }, [myProfile])

  const handleImageChange = (e)=>{
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = ()=>{
      if(fileReader.readyState === fileReader.DONE){
        setUserImg(fileReader.result)
      }
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
   dispatch(updateProfile({
    name,bio,userImg
   }))
  }
  
  return (
    <div className='UpdateProfile'>
        <div className='container'>
            <div className='left-part'>
              <div className='input-user-image'>
               
                <label htmlFor='input-img' className='lable-Img'>
              
                <img src={userImg? userImg: Img} alt="User-Image" aria-label="" />
               
                </label>
               
                <input id='input-img'className='inputImg' type='file' accept='image/*' onChange={handleImageChange} aria-label="" />
              </div>
            </div>
            <div className='right-part'>
                <form onSubmit={handleSubmit}>
                    <input placeholder='Your Name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    type='text'/>
                    <input placeholder='Your Bio'
                    value={bio}
                    onChange={(e)=>setBio(e.target.value)}
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