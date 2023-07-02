import React,{useEffect} from 'react'
import '../Style/about.css'
import metakraft1 from '../Assets/metakraft1.png'
import token1 from '../Assets/token1.png'
import token2 from '../Assets/token2.png'
import token3 from '../Assets/token3.png'
import eco from '../Assets/ecosystem.jpg'
import frame from '../Assets/9.png'
import insta from '../Assets/image 1.png'
import face from '../Assets/image 2.png'
import link from '../Assets/image 3.png'
import beta from '../Assets/ins_line.png'
import Marquee from "react-fast-marquee";
import Galactic from './Galactic'
function About() {
  return (
    <div className="aboutBody">
      <div className="aboutMetaImg" style={{paddingTop:"0"}}>
        <div className="backImg">
        <Galactic/>
        </div>
      <h1 className="aboutConnectHead" style={{paddingTop:"27%",fontSize:"5.5vw",fontWeight:"600",color:"#6C6A6A"}}>Connect Collect Create</h1>
      <div className="aboutContainImg" style={{color:"#F7F7F7",marginLeft:"20%",marginRight:"20%",fontSize:"1.1vw"}}>Metakraft is a passion that was born out of a simple idea - to make communication interactive and to give life to people’s creativity. Our journey began with a small project to make virtual spaces for a small community to come together and have fun. And with one year of effort and Bootstrapping, we have created an ecosystem that supports the needs of creators and metaverse enthusiasts.We understand, creation is not just the stopping point but enabling people with the ownership and easy monetization keeps people engaged and motivated to be part of a bigger revolution</div>
      <h4 className="aboutMissionHead"style={{fontSize:"1.389vw",fontWeight:"800",paddingTop:"10%"}}>Our Mission</h4>
      <div style={{color:"#F7F7F7",marginLeft:"20%",marginRight:"20%",fontSize:"1.11vw"}}>Becoming one stop platform for next 1 Billion Internet Users. Enabling collaboration, creation and giving back control of monetization and ownership back to the people with the help of Decentralization</div>
      <h4 style={{paddingTop:"15%",color:"#E6E6EB",fontWeight:"400",fontSize:"1.389vw"}}>Our Solution</h4>
      <h1 className="aboutConnectHead" style={{paddingTop:"1%",fontSize:"5.55vw",fontWeight:"600",color:"#6C6A6A"}}>The Metakraft Method</h1>
      <div className="aboutMethodCards" style={{paddingTop:"5%",paddingBottom:"5%"}}>
        <div className='aboutMethodCards-1' style={{width:'20vw',height:'13.125vw',textAlign:"left",border:"1px solid #393556",padding:"0.3vw 0.5vw",borderRadius:"4px"}}>
            <img src={token1} style={{width:'6.45vw',height:'5.7vw'}}  alt="not found" />
            <h5 style={{fontWeight:"700",color:"white",marginBottom:"0",marginTop:"0.1vw",fontSize:"0.97vw"}}>No-Code Tools</h5>
            <div style={{color:"#F7F7F7",fontSize:"0.83vw",lineHeight:'1.07'}}>Browser based no-code tools to boost productivity and create immersive virtual experiences with ease</div>
        </div>
        <div className='aboutMethodCards-1' style={{width:'20vw',height:'13.125vw',textAlign:"left",border:"1px solid #393556",margin:"0 12vw",padding:"0.3vw 0.5vw",borderRadius:"4px"}}>
        <img src={token2} style={{textAlign:"left",width:'6.45vw',height:'5.7vw'}} alt="not found" />
        <h5 style={{fontWeight:"700",color:"white",marginBottom:"0",marginTop:"0.1vw",fontSize:"0.97vw"}}>Decentralized Marketplace</h5>
        <div style={{color:"#F7F7F7",fontSize:"0.83vw",lineHeight:'1.07'}}>No More Tension of giving ownership of your assets to some 3rd party platform or pay 10-30% in comissions. You hold the ownership of your assets you create with the help of decentralization</div>
        </div>
        <div className='aboutMethodCards-1' style={{width:'20vw',height:'13.125vw',textAlign:"left",border:"1px solid #393556",padding:"0.3vw 0.5vw",borderRadius:"4px"}}>
        <img src={token3} style={{textAlign:"left",width:'6.45vw',height:'5.7vw'}} alt="not found" />
        <h5 style={{fontWeight:"700",color:"white",marginBottom:"0",marginTop:"0.1vw",fontSize:"0.97vw"}}>Virtual Spaces</h5>
        <div style={{color:"#F7F7F7",fontSize:"0.83vw",lineHeight:'1.07'}}>No More Tension of giving ownership of your assets to some 3rd party platform or pay 10-30% in comissions. You hold the ownership of your assets you create with the help of decentralization</div>
        </div>
      </div>
      <h5 style={{fontWeight:"600",color:"#ABABAB",margin:"0 31%",fontSize:"1.08vw"}}>Interested in knowing more? Or, think our synergies is matching, we would love to get on a call for the same, and talk about it.</h5>
      <button className="contactUsButton" style={{fontWeight:"500",backgroundColor:"rgba(255, 255, 255, 0.2)",color:"#ABABAB",marginTop:"2%",borderRadius:"6px",border:"1px solid #A0A0A0",padding:"0.5vw 3.5vw",fontFamily:"Epilogue",fontSize:"1vw"}}>Contact Us</button>
      <div className="aboutEco">
        <div><img style={{width:"32vw",height:"32vw",borderRadius:"14px"}} src={eco} alt="not found" /></div>
        <div style={{textAlign:"left",paddingLeft:"4%",paddingRight:"21%"}}>
            <h5 style={{color:"#E6E6EB",marginBottom:"0",fontSize:"1.38vw"}}>Vision</h5>
            <h1 style={{color:"#6C6A6A",fontSize:"5.5vw",fontWeight:"600"}}>Ecosystem</h1>
            <div style={{color:"#F7F7F7",paddingTop:"3%",fontSize:"0.9vw"}}>No More Tension of giving ownership of your assets to some 3rd party platform or pay 10-30% in comissions. You hold the ownership of your assets you create with the help of decentralization</div>
        </div>
      </div>
      <div className="aboutCarousel">
           <div style={{color:"#E6E6EB",fontSize:"1.5vw"}}>The Masterminds Behind the Magic</div>
           <h1 style={{color:"#6C6A6A",fontSize:"5.5vw",fontWeight:"600"}}>Say Hello to Team!</h1>
           <div className="carousel-container">
            <Marquee>
  <div className="carouselAbout">
    <img style={{width:"17vw",height:"25vw"}} src={frame} alt="Slide 1" className="slideAbout"/>
    <img style={{width:"17vw",height:"25vw"}} src={frame} alt="Slide 2" className="slideAbout"/>
    <img style={{width:"17vw",height:"25vw"}} src={frame} alt="Slide 3" className="slideAbout"/>
    <img style={{width:"17vw",height:"25vw"}} src={frame} alt="Slide 4" className="slideAbout"/>
    <img style={{width:"17vw",height:"25vw"}} src={frame} alt="Slide 5" className="slideAbout"/>
    <img style={{width:"17vw",height:"25vw"}} src={frame} alt="Slide 6" className="slideAbout"/>
    <img style={{width:"17vw",height:"25vw"}} src={frame} alt="Slide 7" className="slideAbout"/>
    <img style={{width:"17vw",height:"25vw"}} src={frame} alt="Slide 8" className="slideAbout"/>
    <img style={{width:"17vw",height:"25vw"}} src={frame} alt="Slide 9" className="slideAbout"/>
    <img style={{width:"17vw",height:"25vw",marginRight:'7vw'}} src={frame} alt="Slide 10" className="slideAbout"/>
  </div>
  </Marquee>
</div>

      </div>
      <div className="aboutSocial">
<div style={{fontSize:"1.5vw",color:"#E6E6EB"}}>Our Socials</div>
<h1 style={{fontSize:"5.5vw",color:"#6c6a6a",padding:"0 20vw",fontWeight:"600"}}>Join Our Global Community</h1>
      </div>
      <div className="aboutSocialIcons" style={{display:"flex",flexDirection:"row",paddingBottom:"2vw",justifyContent:"space-around",paddingTop:"2%"}}>
        <div style={{width:"18vw",height:"10vw",paddingTop:"2.5vw",backgroundColor:"#1e262e",border:"1px solid #393556",borderRadius:"0.4167vw",textAlign:"center"}}><img style={{width:"4.236vw",height:"4.236vw"}} src={face} alt="" />
        <div style={{color:"#F7F7F7",fontSize:"1.1vw",paddingTop:"0.2vw",paddingBottom:'1.5vw',fontWeight:'600'}}>Linkedin</div></div>
        <div style={{width:"18vw",height:"10vw",paddingTop:"2.5vw",backgroundColor:"#1e262e",border:"1px solid #393556",borderRadius:"0.4167vw",textAlign:"center"}}><img style={{width:"4.236vw",height:"4.236vw"}} src={insta} alt="" /><div style={{color:"#F7F7F7",paddingTop:"0.2vw",fontSize:"1.1vw",fontWeight:'600',paddingBottom:'1.5vw'}}>SubStack</div></div>
        <div style={{width:"18vw",height:"10vw",paddingTop:"2.5vw",backgroundColor:"#1e262e",border:"1px solid #393556",borderRadius:"0.4167vw",textAlign:"center"}}><img style={{width:"4.236vw",height:"4.236vw"}} src={link} alt="" /><div style={{color:"#F7F7F7",paddingTop:"0.2vw",fontSize:"1.1vw",fontWeight:'600',paddingBottom:'1.5vw'}}>Twitter</div></div>
        <div style={{width:"18vw",height:"10vw",paddingTop:"2.5vw",backgroundColor:"#1e262e",border:"1px solid #393556",borderRadius:"0.4167vw",textAlign:"center"}}><img style={{width:"4.236vw",height:"4.236vw"}} src={beta} alt="" /><div style={{color:"#F7F7F7",paddingTop:"0.2vw",fontSize:"1.1vw",fontWeight:'600',paddingBottom:'1.5vw'}}>Instagram</div></div>
      </div>
      </div>
    </div>
  )
}

export default About
