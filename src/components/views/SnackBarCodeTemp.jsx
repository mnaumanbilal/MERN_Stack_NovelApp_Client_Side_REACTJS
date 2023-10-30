
import {Box, Button, Snackbar,} from "@mui/material";
import {Snackbar} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import { useState } from "react";

//the state which invokes and closes snackbar alerts
const [snackopen,setSnackopen]=useState(false);

// below is alert wrapped inside snackbar component which can hide alert after a set period of time given in ms.
<>
<Snackbar open={snackopen} autoHideDuration={6000} onClose={()=>setSnackopen(false)}  >
    <Alert severity="error" onClose={()=>setSnackopen(false)}>  You must be Logged In to post a review! </Alert>
</Snackbar>

// below is the button in which you can call alert:
<Button 

style={{marginTop:"2%",color:"black"}} 
sx={{"&:hover":{backgroundColor:'rgb(100, 100, 249)'}}} 
variant="outlined" 
onClick={(event)=> { setSnackopen(true) }}> 
<CreateIcon fontSize="small"/> Write a Review

</Button>

</>