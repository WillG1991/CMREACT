import React from "react";
import GoogleIcon from "../../assets/images/logosForSocial/google.png"
import InstagramIcon from "../../assets/images/logosForSocial/instagram.png"

function Footer() {
    return (
      <footer className="Footer">
          <p class="gellatio-font footerText"> Find me on:</p>
          <a href="https://www.google.com/search?hl=en-us&q=Christina+Serafina+Healing&ludocid=15710853126795029511&gsas=1&client=safari&lsig=AB86z5VBYjpZZAKI-MAecbdgtrGq&shem=lssle&kgs=53552b2124bc2642&shndl=-1&source=sh/x/kp/local/3&entrypoint=sh/x/kp/local"><img
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