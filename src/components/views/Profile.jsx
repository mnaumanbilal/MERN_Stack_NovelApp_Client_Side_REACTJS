import React, {useState, useEffect} from "react";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

import backgroundImg from "../../assets/pink-bg.jpg"
import userIcon from "../../assets/userIcon.png"
import jwt_decode from "jwt-decode"
import serverLink from "../../serverLinking";
import axios from "axios";
import "./viewCSS/Profile.css"

import { Button } from "@mui/material";

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

//import { setUser, logout } from "../../GlobalStates/userProfileSlice";
//import { useSelector,useDispatch } from 'react-redux';

// ALERT:






const Profile = () => {

  //const dispatch = useDispatch()

  const navigate = useNavigate()
    
    const [user,setUser]=useState("")
    const [userInfo, setUserInfo] = useState("")
    

    useEffect( ()=>{
        const token=sessionStorage.getItem('token');
        if(token){
   
        const userObj = jwt_decode(token)  
        setUser(JSON.parse(JSON.stringify({...userObj})));
        console.log("User from token Name = " + user.email + "\nId = " + user._id) 
        
        axios.get(`${serverLink}/UserInfo/${userObj.email}`)
        .then((res)=>{
          setUserInfo(JSON.parse(JSON.stringify({...res.data})));
          
          
          //dispatch is used 
          //dispatch(setUser(res.data)) // setting the fetcher user to global state as well
          
        })
          
        .catch((error)=>{
          console.log("An Error Occured While Fecthing User Info: " + error)
        })
    
      }    
      },[])

      function Logout(){
        sessionStorage.removeItem("token")
        setUserInfo({})
        console.log("Logout was clicked!")
        navigate("/")
        window.location.reload();

      }

    return(<>
    


        <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="10" lg="15" xl="10" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{}}
                      className="img1"
                      src={userInfo.profilePic}
                      alt="Login First!"
                      fluid />

                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>{userInfo.name}</MDBCardTitle>
                    <MDBCardText>Avid Reader</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Contributions</p>
                        <p className="mb-0">{userInfo.novelWorks}</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">{userInfo.followers}</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Karma Level</p>
                        <p className="mb-0">1</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <Button outline className="me-1 flex-grow-1" variant="contained">Favorites</Button>
                      <Button className="flex-grow-1" variant="outlined" uppercase="false" onClick={()=>Logout()}>Logout</Button>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </>)
}

export default Profile

//export {Logout}


// {userInfo.length === null ? userInfo.profilePic : userIcon}
