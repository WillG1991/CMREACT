import React from "react";
import GoogleIcon from "../../assets/images/logosForSocial/google.png"
import InstagramIcon from "../../assets/images/logosForSocial/instagram.png"
import PhoneIcon from '@material-ui/icons/Phone';


function Footer() {
    return (
      <footer className="Footer">
          <p className="gellatio-font footerText"> Find me on:</p>
          <a className="socialLinks" href="https://www.google.com/search?hl=en-us&q=Christina+Serafina+Healing&ludocid=15710853126795029511&gsas=1&client=safari&lsig=AB86z5VBYjpZZAKI-MAecbdgtrGq&shem=lssle&kgs=53552b2124bc2642&shndl=-1&source=sh/x/kp/local/3&entrypoint=sh/x/kp/local"><img
                        src={GoogleIcon} alt="Instagram Logo/Link" /></a>
                        <a href="tel:347-480-8846">
  <PhoneIcon style={{ fontSize: 30, color: 'white' }} />
</a>
                <a className="socialLinks" href="https://www.instagram.com/thesoulfoodhoney/?hl=en"><img 
                        src={InstagramIcon} alt="Instagram Logo/Link" /></a>  
                        <br></br>
<a href="tel:347-480-8846" style={{ textDecoration: 'none', color: 'white' }}>347-480-8846</a>

                         
                        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.09)' }}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a className='text-dark' href="christinaserafina.com">
      Christina Serfina Healing
      </a>
    </div>
                                 
  </footer>
      
    );
  }
  
  export default Footer;