import React from "react";
import GoogleIcon from "../../assets/images/logosForSocial/google.png"
import InstagramIcon from "../../assets/images/logosForSocial/instagram.png"

function Footer() {
    return (
      <footer className="Footer">
          <p class="gellatio-font footerText"> Find me on:</p>
          <a href="https://www.instagram.com/thesoulfoodhoney/?hl=en"><img
                        src={GoogleIcon} alt="Instagram Logo/Link" /></a>
                <a href="https://www.instagram.com/thesoulfoodhoney/?hl=en"><img 
                        src={InstagramIcon} alt="Instagram Logo/Link" /></a>  
                        <br></br>   
                        <br></br>
                          <small>&copy; Copyright 2021, Christina Serfina Healing</small>            
  </footer>
      
    );
  }
  
  export default Footer;