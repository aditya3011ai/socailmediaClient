import React from 'react'
import { Link } from 'react-router-dom'
import './login.scss'
import { useState } from 'react'
import {axiosClient} from '../../utils/axiosClient'
import { KEY_ACCESS_TOKEN, setItem } from './../../utils/localStorageManager';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState('')
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const data = await axiosClient.post('/auth/login',{
        email,
        password
      })
      setItem(KEY_ACCESS_TOKEN,data.result.accessToken);
      navigate('/')
    } catch (e) {
      setError(e);
    } 
  }
  return (
    <div className='login'>
        <div className='login-box'>
            <h2 className='heading'>Login</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor='email' >Email</label>
            <input type='email' name='email' id='email' onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor='password' >Password</label>
            <input type='password' name='password' id='password'onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" className='submit'/>
            </form>
            <p>Do You have an account?<Link to="/signup"> Sign Up</Link></p>
            <p style={{color:'red'}}>{error?error+"*":""}</p>
        </div>
    </div>
  )
}

export default Login