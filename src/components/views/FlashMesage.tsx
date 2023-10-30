import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import {useState} from "react"

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(severityLevel, msg, invoke) {

  const [open, setOpen] = useState(invoke);

  function handleClick () {
    setOpen(true);
  };

  function OpenMsg(props){
    setOpen(true)
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // this.button = React.createRef()

  if (invoke === true) {setOpen(true)}

  return (

    <>
    <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severityLevel} sx={{ width: '100%' }}>
             {msg}
        </Alert>
      </Snackbar>
    </>
  );
}



/**
 *    <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>

 *    <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert>
 */