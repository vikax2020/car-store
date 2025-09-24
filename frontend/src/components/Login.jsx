import React, { useState } from 'react';
import './Login.css'; 
import axios from "axios"
import API from './BackendRouting.js';
import cookie from "js-cookie"
  import { toast } from 'react-toastify';
const Login = () => {

  const [data,setData] = useState({})


  const handleChange = (e)=>{
    console.log(e.target)

    setData({...data , [e.target.name]:e.target.value})
  }


  const handleSubmit = async(e)=>{
      e.preventDefault()

    try {
      const dataa = await axios.post(API.LOGIN.url,data)
      console.log(dataa , "LoginData")

      setData(dataa.data.body)
   
      if(dataa.data.status===200){
        toast.success(dataa.data.message)
      
        
        cookie.set("userInfo",JSON.stringify(dataa.data.body))
      }

    } catch (error) {
      toast.error("wrong email and password")
    }
      
  }
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form  onSubmit={handleSubmit}>
       
        <input type="email" placeholder="user email" required name="email" value={data.email}  onChange={handleChange} />

        <input type="password" placeholder="Password" required name="password" value={data.password} onChange={handleChange}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login ; 
