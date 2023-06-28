import React from 'react'
import Picture12 from '../Assets/Picture12.png'
import '../Style/footer.css'
import {faFacebook,faLinkedin,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MetaForum from '../Assets/Meta_Forum.png'
function Footer() {
  return (
    <footer  style={{fontSize:"1vw"}}>
    <div className="footer">
    <div className="left p-2">
        <div style={{paddingLeft:'0.5vw'}}><img style={{height:"2.5vw"}}src={Picture12} alt="not found"/></div>
        <div style={{paddingLeft:'1vw',paddingTop:'0.5vw'}}>Copy @ 2023 Metakraft.</div>
        <div style={{paddingLeft:'1vw'}}>All rights reserved.</div>
        <div style={{paddingTop:'0.5vw'}}>
          <img src={MetaForum} alt="image" style={{width:'13.5vw',height:'3.75vw'}} />
        </div>
    </div>
    <div className="center p-2">
      <div className="first">
        <div>Company</div>
        <div style={{color:"#686868"}}>About Us</div>
        <div style={{color:"#686868"}}>Branding Kit</div>
        <div style={{color:"#686868"}}>Contact Us</div>
      </div>
      <div className="second">
        <div>Resources</div>
        <div style={{color:"#686868"}}>Blog</div>
        <div style={{color:"#686868"}}>Newsletter</div>
        <div style={{color:"#686868"}}>How it works?</div>
      </div>
      <div className="third">
        <div>Legal</div>
        <div style={{color:"#686868"}}>Terms & Conditions</div>
        <div style={{color:"#686868"}}>Privacy Policy</div>
      </div>
    </div>
    <div className="right p-2">
        <div>Social</div>
        <div className="icons">
<div style={{paddingLeft:"0"}}><FontAwesomeIcon icon={faFacebook}/></div>
<div><FontAwesomeIcon icon={faTwitter}/></div>
<div><FontAwesomeIcon icon={faInstagram}/></div>
<div ><FontAwesomeIcon icon={faLinkedin}/></div>
        </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer
