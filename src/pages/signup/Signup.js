import React ,{useState}from 'react'
import { KEY_ACCESS_TOKEN,setItem } from '../../utils/localStorageManager'
import { axiosClient } from '../../utils/axiosClient'
import { Link, useNavigate } from 'react-router-dom'
import './signup.scss'
const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault();
      const data = await axiosClient.post('/auth/signup',{
        name,
        email,
        password
      })
      setItem(KEY_ACCESS_TOKEN,data.result.accessToken);
      navigate('/')
  }
  return (
    <div className='signup'>
        <div className='signup-box'>
            <h2 className='heading'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor='name' >Name</label>
            <input type='text' name='name' id='name'onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor='email' >Email</label>
            <input type='email' name='email' id='email' onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor='password' >Password</label>
            <input type='password' name='password' id='password'onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" className='submit'/>
            </form>
            <p>Already have an account?<Link to='/login'>Login</Link></p>
        </div>
    </div>
  )
}

export default Signup