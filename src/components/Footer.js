import React from 'react';
import "./Footer.css"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>

        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} 
                    style={{color:"#fff" 
                    , marginRight:"2rem"}}/>
                    <div>
                        <p>123 Housing Society.</p>
                        <p>Iran</p>

                    </div>
                    </div>
                    <div className='phone'>
                        <h4>
                        <FaPhone size={20} style={{color:"#fff" 
                    , marginRight:"2rem"}}/>
                    0918-761-89-41
                        </h4>
                    
                    </div>
                    <div className='email'>
                        <h4>
                        <FaMailBulk size={20} style={{color:"#fff" 
                    , marginRight:"2rem"}}/>
                    monajamshidirad.65@gmail.com
                        </h4>
                    
                    </div>
                

            </div>
            <div className='right'>
                <h4>About me</h4>
                <p>In publishing and graphic
                     design, Lorem ipsum (/ˌlrəmsəm/) is a placeholder text commonly used to demonstrate the visual content. </p>
                    <div className='social'>
                    <FaFacebook size={30}
                     style={{color:"#fff" , marginRight:"1rem"}}/>

                    <FaTwitter size={30}
                     style={{color:"#fff" , marginRight:"1rem"}}/>

                    <FaLinkedin size={30}
                     style={{color:"#fff" , marginRight:"1rem"}}/>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;