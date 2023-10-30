import React from "react";
import loginImg from "../../assets/login.svg"
import userIcon from "../../assets/userIcon.png"
import "./viewCSS/Registeration.css"
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

import serverLink from "../../serverLinking";

import { Navigate, useNavigate } from "react-router-dom";

//Snackbar Alert code
import {Snackbar, Alert} from "@mui/material";


const Login = () => {
  //the state which invokes and closes snackbar alerts
const [snackopen,setSnackopen]=useState(false);

const [errorMsg, setErrorMsg] = useState("")
const [severityLevel, setSeverityLevel] = useState()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function LoginUser(){
    if (password !== "" && email !== "")
      {
        axios.post(`http://${serverLink}:4000/login`,{password,email}).then((res)=>{
          if(res.data !== false){
            sessionStorage.setItem('token',res.data); //token coming from index.js is fetched and set 
            console.log("Login Successful!")
             navigate("/profile")
             window.location.reload();
            }
            else {
                setSeverityLevel("error")
                setErrorMsg("Login Failed, Incorrect Email or Pasword")
                setSnackopen(true)
            }

        }).catch((e)=>{
            console.log(e)
        })
      }
      else {
        setErrorMsg("Password Field Cannot be Left Empty")
        setSeverityLevel("error")
        setSnackopen(true)
        
      }
  }

  // snackbar must be inside the main component's return. I have set its severity level and error msg as states
    return(
        <>

<Snackbar open={snackopen} autoHideDuration={5000} onClose={()=>setSnackopen(false)}  >
    <Alert severity={severityLevel} onClose={()=>setSnackopen(false)}> {errorMsg} </Alert>
</Snackbar>
            
      <div className="base-container" style={{marginTop:"5%"}}>
        <div className="header" style={{fontSize:40, fontFamily:"fantasy", marginBottom:"3%"}}>Already an Avid Reader? Sign in and Continue Reading!</div>
        <div className="content" style={{}}>
          <div className="image" style={{}}>
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="email" value={email} placeholder="Email" onChange={ (e)=> setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" value={password} placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <div className="form-group">
          <Button style={{backgroundColor: "rgb(91, 91, 147)",color: "white", width:"14em"}} onClick={()=> LoginUser()}>
            Login
          </Button>
        </div>

          </div>
        </div>

      </div>
    
        </>
    )

}

export default Login