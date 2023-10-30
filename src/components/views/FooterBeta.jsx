import React from 'react';
import "./viewCSS/FooterBeta.css"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import MangatoonLogo from "../../assets/mangatoonLogo.svg"

//icons = https://mui.com/material-ui/material-icons/?query=twitter
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';

import HomeIcon from '@mui/icons-material/Home';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PrintIcon from '@mui/icons-material/Print';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <FacebookIcon fontSize="small"/>
          </a>
          <a href='' className='me-4 text-reset'>
            <TwitterIcon fontSize="small"/>
          </a>
          <a href='' className='me-4 text-reset'>
            <InstagramIcon fontSize="small"/>
          </a>
          <a href='' className='me-4 text-reset'>
            <GoogleIcon fontSize="small"/>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src={MangatoonLogo} style={{width:"100%"}}/>
              </h6>
              <p>
                Mangatoon's Huge Library of Literary Masterpieces and Artworks is waiting to be Explored!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Policy</h6>
              <p>
                <a href='/about' className='text-reset linkWord'>
                  About
                </a>
              </p>
              <p>
                <a href='#' className='text-reset linkWord'>
                  Contact
                </a>
              </p>
              <p>
                <a href='#' className='text-reset linkWord'>
                  Company
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset linkWord'>
                  License
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4' style={{textDecorationLine:"none"}}>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/register' className='text-reset linkWord'>
                  Register
                </a>
              </p>
              <p>
                <a href='/login' className='text-reset linkWord'>
                  Login
                </a>
              </p>
              <p>
                <a href='/novels' className='text-reset linkWord'>
                  Novels
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset linkWord'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <HomeIcon fontSize="medium" />
                Lahore, LHR 54000, PK
              </p>
              <p>
                <LocalPostOfficeIcon fontSize="medium" />
                mangatoon@mobi.com
              </p>
              <p>
                <LocalPhoneIcon fontSize="medium"/> +92 300 1234567
              </p>
              <p>
                <PrintIcon fontSize="medium" /> +92 300 1234567
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: <b>Muhammad Nauman | SP20-BCS-073</b>
        <a className='text-reset fw-bold' href='/'>
        </a>
      </div>
    </MDBFooter>
  );
}