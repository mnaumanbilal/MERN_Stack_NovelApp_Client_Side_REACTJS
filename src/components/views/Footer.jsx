import React from 'react';
import './viewCSS/Footer.css';

const Footer= ()=>{
    return(

        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>MangaToon</h1>
                    <p style={{fontStyle:"italic"}}>Read Masterpiece Literary Works From Best Seller Authors</p>
                </div>

            </div>

            <div className='bottom'>
                <div>
                    <h4>Site</h4>
                    <a href='/'>Home</a>
                    <a href='/novels'>Novels</a>
                    <a href='/register'>Sign Up</a>
                    <a href='/login'>Login</a>


                </div>
                <div>
                    <h4>This is an Alpha Build</h4>
                    <a href='/'>Made By Nauman</a>
                    <a href='/'>SP20-BCS-073</a>
                    <a href='/'>Section - A</a>
                </div>

            </div>
        </div>
    );
}
export default Footer; 

/*
                <div>
                    <a href='/'></a>
                    <i className='fa-brands fa-facebook-square'></i>
                    <i className='fa-brands fa-instagram-square'></i>
                    <i className='fa-brands fa-youtube-square'></i>
                </div>
*/