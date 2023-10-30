import React, { useEffect, useState } from "react";
import "./viewCSS/product.css"
import { Button } from "@mui/material";
import {Box} from "@mui/material";
import axios from "axios"
import serverLink from "../../serverLinking"

import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

//import Loader from "./Loader.jsx";
import {Audio} from "react-loader-spinner";
import {InfinitySpin} from "react-loader-spinner"
import {Rings} from "react-loader-spinner"
import Footer from './Footer'
import { server } from "fontawesome";

import { Navigate, useNavigate, Route, Routes, useLocation } from "react-router-dom";

import NovelDetailPage from "./NovelDetailPage";

const NovelRenderer = () => {

    const navigate = useNavigate()

    const [novels, setNovels] = useState([])

    useEffect(()=>{
        axios.get(`${serverLink}/api/public/products`).then((res)=>{
        setNovels(res.data)
        console.log("API = " + res.data)
        }).catch((e)=>{
            console.log("An error occured" + e);
        })
    },[])


                               

    
function NovelDisplay (props) {

    const {state} = useLocation()

function openNovel(obj){

    navigate("/novels/detail", {state: { ...obj}})

}

    
        return (
            <>
    <div>
    
    <Box className="homeNovelBox">
      <div className="homeNovelBoxImageDiv" onClick={(e)=>{openNovel(props.item)}}>

     <a href=""> <img src="https://cdn.scribblehub.com/images/8/Immortal-Sins-Dystopia_164783_1598471480.jpg" /> </a>

      </div>
      <div className="homeNovelBoxInfoDiv">
        <p style={{fontSize:"larger", fontWeight:"bold"}}><span>{props.item.name}</span></p>
        <p className="homeNovelBoxInfo"><span>{props.item.description.substring(0,210)+"..."}</span></p>
        <div style={{display:"flex", margin:"0.5%"}}>  

<span style={{display:"flex", flexDirection:"row"}}><VisibilityIcon /> <span style={{margin:"2%", marginLeft:"5%", marginTop:"5%"}}>{(props.item.views>=1000 ? props.item.views/1000 + "K" : props.item.views)}</span></span> 

<span style={{display:"flex", flexDirection:"row", marginLeft:"8%"}}><ThumbUpIcon /> <span style={{margin:"2%", marginLeft:"5%", marginTop:"5%"}}>{(props.item.likes>=1000 ? props.item.likes/1000 + "K" : props.item.likes)}</span></span> 


     </div>
     <span><p><b>Genre: </b> {props.item.genre.map((genre)=>(genre + " / "))}  </p></span>
      </div>


    </Box>
      
    </div>

                
            </>
        )
}



    while (novels.length == 0) return(<div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"20%" }}>
<Rings
  height="150"
  width="150"
  radius="10"

/>
    </div>)

    return (
        <>
        <h2 style={{margin:"1%", marginTop:"1%", fontFamily:"Lucida", fontWeight:"bold"}}>Popular Novels</h2>
        
        <Box className="NovelBoxMain">
        
        { novels.map((novels)=>{
            return (<Box className="innerNovelBox"> <NovelDisplay item={novels}/>  </Box>)})}
        
        </Box>
      
        </>
        )
        

}
 
export default NovelRenderer;

// div detection = border:"2px", borderColor:"red", borderStyle:"dotted", 


/**
 * 
 * import {Audio} from "react-loader-spinner"
 * 
 * <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
 */

// axios.post(`http://localhost:4000/add-to-cart/${prodID}`, {prodID}).then(()=> alert("Item Added to cart")).catch((error)=> console.log("Item was NOT added to cart " + error))
