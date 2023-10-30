import "../../App.css"

import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

import logo from "../../assets/mangatoonLogo.svg"

import { useState, useEffect} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-bootstrap/Dropdown';

import { useNavigate } from "react-router-dom";

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
  } from 'mdb-react-ui-kit';

  import React from "react";


function NavBar() {

  const navigate = useNavigate()
 useEffect(()=>{

  const token = sessionStorage.getItem("token")
  if (token){
    setCheckLoginState(true)
    //window.location.reload();
  }
  else setCheckLoginState(false)
 }, [])

 const [checkLoginState, setCheckLoginState] = useState(false)

 function checkLogin(){
  const token = sessionStorage.getItem("token")
  if (token){
    setCheckLoginState(true)
    return (<><MDBNavbarLink><Link to="/profile" className="Link">Profile</Link></MDBNavbarLink></>)
  }
  else return false
 }


    const [showNavSecond, setShowNavSecond] = useState(false);
  return (
    <>
      <MDBNavbar expand='lg' light bgColor='white'>
      <MDBContainer fluid>

        <MDBNavbarBrand href='/'>   
         <div className="menuImg"> <img id="menuImg" src={logo}></img> </div>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MenuIcon />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav style={{}}>
            
            <MDBNavbarLink active aria-current='page'>
            <Link to="/" className="Link">Home</Link> 
            </MDBNavbarLink>

            <MDBNavbarLink><Link to="/about" className="Link">About</Link></MDBNavbarLink>

            <MDBNavbarLink><Link to="/novels" className="Link">Novels</Link></MDBNavbarLink>

            <Dropdown className="dropdown-register">
      <Dropdown.Toggle variant="primary" size="sm">
      Register
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/login">Login</Dropdown.Item>
        <Dropdown.Item href="/register">Sign Up</Dropdown.Item>
        <Dropdown.Divider />
        {(checkLoginState === true) ? (<Dropdown.Item href="/profile">Profile</Dropdown.Item>) :  (<Dropdown.Item href="/profile" disabled={true} >Profile</Dropdown.Item>) }
      </Dropdown.Menu>
    </Dropdown>

            




          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
 </>
  );
}

export default NavBar;

/**
 * // disabled link
 *             <MDBNavbarLink disabled tabIndex={-1} aria-disabled='true'>
              Nauccx
            </MDBNavbarLink>

            
            <MDBNavbarLink><Link to="/login" className="Link">Login</Link></MDBNavbarLink>

            <MDBNavbarLink><Link to="/register" className="Link">Register</Link></MDBNavbarLink>

            {(checkLoginState === true) ? (<Dropdown.Item >Logout</Dropdown.Item>) : ""}

 */