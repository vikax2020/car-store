
import React, { useState } from 'react';
import './Signup.css';
import axios from "axios"
import API from './BackendRouting.js';
import { toast } from 'react-toastify';

const Signup = () => {

    const [data,setData] = useState({
      name: "",
      email: "",
      password: "",
      phone: "",
      image: "" 
   
    }); 


  const handleChange = (e)=>{
    console.log(e.target)
     if(e.target.name === "image"){
          setData({...data , [e.target.name]:e.target.files[0]}) 
     }
    else{
       setData({...data , [e.target.name]:e.target.value})
    }
  } 


  const handleSubmit = async(e)=>{
      e.preventDefault()

      try {

        const formdata = new FormData()
        formdata.append("name" , data.name)
        formdata.append("email",data.email)
        formdata.append("password",data.password)
        formdata.append("phone",data.phone)
        formdata.append("image",data.image)
        const dataa = await axios.post(API.SIGNUP.url,formdata)
      console.log(dataa , "signup")
       if (dataa.data.status === 200) {
    toast.success(dataa.data.message);
    setData(dataa.data.body); 
  } else {
    toast.error(dataa.data.message || "Signup failed ");
  } 
      setData(dataa.data.body)

      } catch (error) {
        console.log(error,"signup error")
      }

  }

  return (
    <div className="signup-container"> 
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" name='image' onChange={handleChange} />
        <input type="text" placeholder="Username" required  name='name' value={data.name} onChange={handleChange}/>
        <input type="email" placeholder="Email" required name='email' value={data.email} onChange={handleChange} />
        <input type="password" placeholder="Password" required name='password' value={data.password} onChange={handleChange}/>
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Create Account</button>        
      </form>
    </div> 

  );

};

export default Signup ;
 