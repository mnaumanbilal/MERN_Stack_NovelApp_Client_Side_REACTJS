import React, { useEffect, useState } from "react";
import { Link, Route, Routes, Redirect } from "react-router-dom";
import "./viewCSS/HomePage.css";
import banner from "../../assets/books.jpg"
import carouselCustom from "./carouselCustom";
import "./carouselCustom.jsx"
import { Button } from "@mui/material";

import {Box} from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import axios from "axios";
import jwt_decode from "jwt-decode";
import serverLink from "../../serverLinking"

import slideShowImage1 from "../../assets/slideImage1.webp"
import slideShowImage2 from "../../assets/slideImage2.jpg"
import slideShowImage3 from "../../assets/slideImage3.jpg"

//import Footer from "./FooterBeta"

var slideImage = [{
  link:"https://elifnotes.com/wp-content/uploads/2021/12/22-of-the-best-books-of-all-time-you-must-read-750x375.webp",
  localSource:slideShowImage1
},
{
  link:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lead-image-book-template-01-1663176282.jpg",
  localSource:slideShowImage2
},
{
  link:"https://s26162.pcdn.co/wp-content/uploads/sites/3/2022/11/november-best-crime-fiction-feat-960x430.jpg",
  localSource:slideShowImage3
}
]

// let novel = {
//   name:"Immortal Sins: Dystopia",
//   description:"The seven deadly sins which have plagued humanity since the beginning of time. The strong and unchecked influence of these Sins have plunged the World into a state of Chaos, Constant Wars, Diseases and Plagues are prevalent. Because of such Dystopia, the World has been set back on prosperity by decades.",
//   genre:["Action", "Psychological", "Crime"],
//   likes:"3700",
//   views:"55300",
//   favourites:"450",

// }

const HomePage = () => {

  const [user,setUser]=useState("")
  const [userInfo, setUserInfo] = useState("")

  useEffect( ()=>{
    const token=sessionStorage.getItem('token');
    if(token){
      const userObj = jwt_decode(token)  
    setUser(JSON.parse(JSON.stringify({...userObj})));   
    axios.get(`${serverLink}/UserInfo/${userObj.email}`)
    .then((res)=>{
      setUserInfo(JSON.parse(JSON.stringify({...res.data})));
      const userInfoObj = res.data 
})
    .catch((error)=>{
      console.log("An Error Occured While Fecthing User Info: " + error)
    })

  }


  },[])

  return (
    <>

    <div className="slideShowDiv">
      
      <div style={{width:"85%", borderRadius:10}}>{carouselCustom(slideImage)}</div>
      

     
    </div>

    <Box><p className="phrase">Welcome to Mangatoon, where you can read Literary Works of Different Artists & Writers! </p></Box>
    
     
    </>
  );
};

export default HomePage;


// backgroundImage: `url(${findPharmacy})`

/*

// Novel of the day

      <div className="NovelOfTheDay" style={{width:"28%", height:"100%", marginLeft:"1%"}}>

      <img src="https://cdn.scribblehub.com/images/8/Immortal-Sins-Dystopia_164783_1598471480.jpg" />
      <span className="NovelOfTheDayTag">Novel of the Day</span>
      </div>

      // top banner
          <div>
      <img className="literatureBanner" src={banner} />
    </div>

*/