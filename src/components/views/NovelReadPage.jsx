import React, { useEffect, useState } from "react";
import {Box, Button, Snackbar, Alert} from "@mui/material";
import jwt_decode from "jwt-decode"
import serverLink from "../../serverLinking";
import axios from "axios";
import { useLocation } from "react-router";

import "./viewCSS/NovelReadPage.css"



export default function NovelReadPage(){

    const {state} = useLocation()

    const [chp, setChp] = useState("Loading Chapter")
    const [chpIndex, setChpIndex] = useState(0)

    const [open, setOpen] = React.useState(false);
    const [snackopen,setSnackopen]=useState(false);
    const [errorMsg, setErrorMsg] = useState("")
    const [severityLevel, setSeverityLevel] = useState()

    useEffect( ()=>{

        axios.get(`${serverLink}/api/novels/chapter/${state._id}/${chpIndex}`)
        .then((res)=> {setChp(res.data)})
        .catch((error)=> setChp(error))

    }, [] )

    function getChp(index){
        axios.get(`${serverLink}/api/novels/chapter/${state._id}/${index}`)
        .then((res)=>{setChp(res.data); setChpIndex(index)})
        .catch((error)=>{setErrorMsg(error); setSeverityLevel("warning"); setSnackopen(true)})
    }

// {state.chapters.indexOf(`${state.chapters[0]}`)}

//console.log("chp =" + state.chapters[0])



    return(<>

<Snackbar open={snackopen} autoHideDuration={6000} onClose={()=>setSnackopen(false)}  >
    <Alert severity={severityLevel} onClose={()=>setSnackopen(false)}> {errorMsg} </Alert>
</Snackbar>

    <h1 className="heading1" > {state.name}</h1>    

    <h2 className="heading1">~ Chapter {chpIndex} ~</h2>

   <Box style={{width:"80%", marginLeft:"auto", marginRight:"auto"}}>

    <Button variant="outlined" className="previousChpBtn" 
    onClick={(event)=>{if (chpIndex === 0) {
        setErrorMsg("There are No More Previous Chapters"); 
        setSeverityLevel("warning");
        setSnackopen(true)}

        else {
            getChp(chpIndex-1)
        }
        
        }}>
    Prev Chapter</Button>

    <Button variant="outlined" className="nextChpBtn"
    onClick={(event)=>{ getChp(chpIndex+1) }}>
        
        Next Chapter</Button>   
   </Box> 


    <Box><p className="chp"> {`${chp}`} </p></Box>
    </>)
}