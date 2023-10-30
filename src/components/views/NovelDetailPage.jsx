import React, { useEffect, useState } from "react";
import {Box, Button, Snackbar, Alert} from "@mui/material";
import jwt_decode from "jwt-decode"
import serverLink from "../../serverLinking";
import axios from "axios";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarIcon from '@mui/icons-material/Star';
import CreateIcon from '@mui/icons-material/Create';
import { useLocation } from "react-router";
import { Navigate, useNavigate } from "react-router-dom";

import TextField from '@mui/material/TextField';
import { Card, CardContent, CardMedia, Grid, IconButton, InputAdornment, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {InfinitySpin} from "react-loader-spinner"

import "./viewCSS/NovelDetailPage.css"

// get current URL:
//const pathname = window.location.pathname

const NovelDetailPage =()=>{

    const navigate = useNavigate()

    const {state} = useLocation()

    const [comments, setComments] = useState()
    const [user, setUser] = useState("")
    const [userComment, setUserComment] = useState("")
    const [snackopen,setSnackopen]=useState(false);

    const [errorMsg, setErrorMsg] = useState("")
    const [severityLevel, setSeverityLevel] = useState()
    
    // for review dialog form
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

function SnackbarAlert(){
    return(<>

    <Snackbar open={snackopen} autoHideDuration={6000} onClose={()=>setSnackopen(false)}  >
    <Alert severity={severityLevel} onClose={()=>setSnackopen(false)}> {errorMsg} </Alert>
</Snackbar>
    
    </>)
    
}

// fetches comments
     useEffect (()=> {
        let commentObj = {}
        axios.get(`${serverLink}/api/novels/get/comments/${state._id}`)
        .then((res)=> {setComments(res.data); commentObj = {...res.data}; console.log("comment found = " + commentObj.commentText)})
        .catch( (error) => console.log("Unable to fetch the novel's comments = " + error))
    }, [])

    function loginStatus(){
        const token = sessionStorage.getItem("token")
        if (!token) {return false}
        else{
            const userObj = jwt_decode(token) 
            console.log("user obj is = " + userObj.name) 
            setUser({...userObj})
            return true;
        }
    }

    function submitComment(){
        if (userComment != null || userComment != "" || userComment != " "){
        axios.post(`${serverLink}/api/novels/submit/comment/${user._id}/${state._id}`, {commentText:userComment})
        .then((res)=> {console.log("comment posted successfully!"); setUserComment(""); window.location.reload()})
        .catch((error)=> {console.log("Failed to Post Comment!")})
        }
        else {
            alert("Review Field Cannot be left Empty")
        }
    }



    function renderComments(){
       
        if (comments) 
        return (
            <>
 <CardContent>
                <Typography variant='h6'> </Typography>
                {comments.map((comment,index)=>{
                    return(
                        <>
                        
                        
                        {
                            comment.user.map((user,index)=>{
                                return(
                                    <>
                                  <Typography style={{fontWeight:"bold", fontSize:"normal"}}> @{user.name}:  </Typography>
                                    </>
                                )
                            })
                        }
                         
                         <p className="commentText"> "{comment.commentText}" </p>

                        </>
                    )
                })}
                <hr />
            </CardContent>              
            </>
        )
        
    }

    return(<>
    
    <div className="NovelBoxDiv">

        <Box className="NovelBox">
            <h3 className="name">{state.name}</h3>
            <h3 className="author">Author Name: {state.author}</h3>

            <Box className="NovelInfoBox">

            <Box className="imgBox"><img src={state.imgLink} /></Box>

            <Box>

            <Box className="generalText">NovelToon got authorization from "{state.author}" to publish this work, the content is the author's own point of view, and does not represent the stand of NovelToon.</Box>

             <div className="rating">  


                    <span style={{display:"flex", flexDirection:"row"}}>

                        <VisibilityIcon /> 
                        <span style={{margin:"2%", marginLeft:"10%", marginTop:"1%"}}>{(state.views>=1000 ? state.views/1000 + "K" : state.views)}</span>
                    </span> 

                    <span style={{display:"flex", flexDirection:"row", marginLeft:"8%"}}>
                        <ThumbUpIcon /> 
                        <span style={{margin:"2%", marginLeft:"10%", marginTop:"1%"}}>{(state.likes>=1000 ? state.likes/1000 + "K" : state.likes)}</span>
                    </span> 

                    <span style={{display:"flex", flexDirection:"row", marginLeft:"8%"}}>

                    <StarIcon /> 
                    <span style={{margin:"2%", marginLeft:"10%", marginTop:"1%"}}>4.8</span>
                    </span> 



              </div>

              <Button className="ReadButton" variant="contained" style={{marginLeft:"5%", marginTop:"5%"}} 
              onClick={ (event)=>{navigate("/novels/detail/read", {state: {_id: state._id, name: state.name, author: state.author, state: state.imgLink}})}
                       }> Read </Button>
            </Box>

            </Box>


            <Box className="descriptionBox">
            <h3 className="description">Sypnosis:</h3>
                {(!state.fullDescription) ? state.description : state.fullDescription}
            
            </Box>

        </Box>

    </div>

    <Box style={{marginTop:"5%", marginLeft:"1%"}}>
    <h3 className="description" style={{fontWeight:"bold"}}>Comments:</h3>

    <Box>  
    <div>

    <Button style={{marginTop:"2%",color:"black"}} 
            sx={{"&:hover":{backgroundColor:'rgb(100, 100, 249)'}}} 
            variant="outlined" 
            onClick={(event)=> {
                if (loginStatus() === true){
                    setSeverityLevel("success");
                    setErrorMsg("Type in your Review and hit Submit!");
                    setSnackopen(true); handleClickOpen();}
                else {
                    setErrorMsg("You must be Logged In to post a review!"); 
                    setSeverityLevel("error");
                    setSnackopen(true);}
                    }
                    }> 
            <CreateIcon fontSize="small"/> Write a Review
    </Button>

 

<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Review</DialogTitle>
  <DialogContent>
    <DialogContentText>
      Share your opinion on this Novel, your Review is highly appreciated and motivated Authors to write more!
    </DialogContentText>
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="Review"
      type="text"
      fullWidth
      variant="standard"
      value={userComment}
      onChange={ (e)=> setUserComment(e.target.value)}
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={ (e) => { console.log("Comment=" + userComment) ;submitComment(); handleClose()} }>Submit</Button>
  </DialogActions>
</Dialog>
</div>
    </Box>


    {(!state.comments || state.comments.length === 0 || state.comments === null) ? <h3 className="description" style={{fontSize:"medium", fontStyle:"italic", marginTop:"2%"}}>This Novel doesn't have any comments yet, be first to share your review this really helps the author!</h3> : renderComments() }     

   
    </Box>

    {SnackbarAlert()}

    </>)
}
export default NovelDetailPage;