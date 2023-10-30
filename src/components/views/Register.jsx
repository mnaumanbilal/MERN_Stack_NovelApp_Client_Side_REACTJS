import React from "react";
import loginImg from "../../assets/books.svg"
import "./viewCSS/Registeration.css"
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import serverLink from '../../serverLinking'

const Register = () => {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [profilePic, setProfilePic] = useState()

  function registerUser(){
    if (password !== "" && confirmPassword !== "" && password === confirmPassword && name !== "")
      {
        const formdata=new FormData();
        formdata.append('name',name);
        formdata.append('email',email);
        formdata.append('password',password);
        formdata.append('profilePic',profilePic);
        axios.post(`http://${serverLink}:4000/register`,formdata).then(()=>{
            alert('User was registered Successfully')
        }).catch((e)=>{
            console.log("Registeration was Unsuccessfull !" + e)
        })
      }
      else if(password === "" && confirmPassword === "") alert("Password Cannot be Left Empty")
      else if(password !== confirmPassword) alert("Password Mismatch")
  }


    return(
        <>
            
      <div className="base-container" style={{marginTop:"5%"}}>
        <div className="header" style={{fontSize:40, fontFamily:"fantasy"}}>Sign up Today and Read your Favourite Novels Uninterrupted</div>
        <div className="content" style={{}}>
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
          <div className="form-group">
              <label htmlFor="username">Name</label>
              <input type="text" value={name} placeholder="Name" onChange={ (e)=> setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="email" value={email} placeholder="Email" onChange={ (e)=> setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" value={password} placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={(e)=> setConfirmPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <label >Choose Your Profile Picture</label>
              <input type="file" onChange={(e)=> setProfilePic(e.target.files[0])} />
            </div>
          </div>
        </div>
        <div className="footerDiv" style={{backgroundColor:"white", margin:"2%"}}>
          <Button style={{backgroundColor: "rgb(91, 91, 147)",color: "white", width:"14em"}} onClick={registerUser}>
            Register
          </Button>
        </div>
      </div>
    
        </>
    )

}

export default Register