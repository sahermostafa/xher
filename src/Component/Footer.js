import React from "react";
import {Container} from 'react-bootstrap';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";

function Footer() {
  return (
    <Container fluid>
      <div className="footer">
        <p><span>-Work days:</span>Saturday – Thursday</p>
        <p><span>-Work hours:</span> 8:00 Am – 5:00 Pm</p>
        <p><span>-Contact Info:</span></p>
        <p><span>Address:</span> KSA- Riyadh – Al Solay Industrial Area Exit 18 Ring Road</p>
        <p><span>Phone #:</span> +966-1-2415014 – 10 Lines</p> 
        <p><span>Fax #:</span> +966-1-2447803</p> 
        <p><span>E-mail:</span> info@pbc-sa.com</p>
        <div className="socialMedia">
          <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
        </div>
        <p> &copy; 2021 pedrotechpizza.com</p>
      </div>
    </Container>
   
  );
}

export default Footer;