import React,{useEffect} from 'react'
import '../Style/about.css'
import frame from '../Assets/9.png'
import insta from '../Assets/image 1.png'
import face from '../Assets/image 2.png'
import link from '../Assets/image 3.png'
import beta from '../Assets/ins_line.png'
import Marquee from "react-fast-marquee";
import Galactic from './Galactic'
import Logo7_1 from '../Assets/Untitled design (38) 1.png'
import Logo8_1 from '../Assets/comes with payment (6).png'
import Comp from './Comp.jsx'
import Cube from '../Assets/cube.82f18a4d.gif'
function About() {
  return (
    <div className="aboutBody">
      <Comp/>
      <div className='aboutBody_1'>*</div>
      <div className='aboutBody_2'>%</div>
      <div className="aboutMetaImg" style={{paddingTop:"0"}}>
        <div className="backImg">
        <Galactic/>
        </div>
      <h1 className="aboutConnectHead" style={{paddingTop:"20%",fontSize:"5.5vw",fontWeight:"600",color:"#6C6A6A"}}>Connect Collect Create</h1>
      <div className="aboutContainImg" style={{lineHeight:'107%',color:"#F7F7F7",marginLeft:"5.5vw",marginRight:"5.5vw",fontSize:"1.67vw"}}>Metakraft is a passion that was born out of a simple idea - to make communication interactive and to give life to people’s creativity. Our journey began with a small project to make virtual spaces for a small community to come together and have fun. And with one year of effort and Bootstrapping, we have created an ecosystem that supports the needs of creators and metaverse enthusiasts.We understand, creation is not just the stopping point but enabling people with the ownership and easy monetization keeps people engaged and motivated to be part of a bigger revolution</div>
      <h4 className="aboutMissionHead"style={{fontSize:"1.67vw",fontWeight:"700",paddingTop:"9.375vw"}}>Our Mission</h4>
      <div style={{color:"#F7F7F7",marginLeft:"9vw",marginRight:"7vw",fontSize:"1.67vw",lineHeight:'107%'}}>Becoming one stop platform for next 1 Billion Internet Users. Enabling collaboration, creation and giving back control of monetization and ownership back to the people with the help of Decentralization</div>
      <h4 style={{paddingTop:"15.3vw",color:"#E6E6EB",fontWeight:"400",fontSize:"1.389vw"}}>Our Solution</h4>
      <h1 className="aboutConnectHead" style={{paddingTop:"0",fontSize:"5.55vw",fontWeight:"600",color:"#6C6A6A"}}>The Metakraft Method</h1>
      <div className="aboutMethodCards" style={{paddingTop:"5.9vw",paddingBottom:"13vw"}}>
        <div className='aboutMethodCards-1' style={{width:'22.152vw',height:'15.125vw',textAlign:"left",border:"1px solid #393556",padding:"1.25vw 1.46vw",borderRadius:"4px"}}>
              <svg width="5.97VW" height="3.33vw" viewBox="0 0 55 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.84276 16.6467L17.2145 21.2752L17.1563 26.5679L0.360914 19.2343L0.402146 15.4845L4.84276 16.6467ZM17.3043 13.1116L4.81335 17.5449L0.36843 18.5508L0.409662 14.801L17.3622 7.83852L17.3043 13.1116ZM34.2341 1.10956L23.4655 31.8719L19.2861 31.826L30.0547 1.0636L34.2341 1.10956ZM49.4018 17.918L36.9322 13.3079L36.99 8.05434L53.922 15.3894L53.8806 19.1587L49.4018 17.918ZM36.8418 21.5301L49.4303 17.0979L53.9145 16.0729L53.8733 19.8227L36.784 26.7837L36.8418 21.5301Z" fill="white" fill-opacity="0.72"/>
              </svg>
            <h5 style={{fontWeight:"700",color:"white",marginBottom:"0.55vw",marginTop:"1.1vw",fontSize:"1.38vw"}}>No-Code Tools</h5>
            <div style={{color:"#F7F7F7",fontSize:"1.1vw",lineHeight:'1.07'}}>Browser based no-code tools to boost productivity and create immersive virtual experiences with ease</div>
        </div>
        <div className='aboutMethodCards-1' style={{width:'22.152vw',height:'15.125vw',textAlign:"left",border:"1px solid #393556",margin:"0 12vw",padding:"1.25vw 1.46vw",borderRadius:"4px"}}>
        <img style={{width:'3.68vw',height:'3.68vw'}} src={Logo8_1} alt="" />
        <h5 style={{fontWeight:"700",color:"white",marginBottom:"0.55vw",marginTop:"1.1vw",fontSize:"1.38vw"}}>Decentralized Marketplace</h5>
        <div style={{color:"#F7F7F7",fontSize:"1.1vw",lineHeight:'1.07'}}>Marketplace for Aspiring 3D Designers and Creators to Monetize with Freedom and total Control.</div>
        </div>
        <div className='aboutMethodCards-1' style={{width:'22.152vw',height:'15.125vw',textAlign:"left",border:"1px solid #393556",padding:"1.25vw 1.46vw",borderRadius:"4px"}}>
        <img src={Logo7_1} style={{width:'3.68vw',height:'3.68vw'}}  alt="" />
        <h5 style={{fontWeight:"700",color:"white",marginBottom:"0.55vw",marginTop:"1.1vw",fontSize:"1.38vw"}}>Spacial Rooms</h5>
        <div style={{color:"#F7F7F7",fontSize:"1.1vw",lineHeight:'1.07'}}>Create Virtual spaces to use it for Product Showcase, Demo, Education or a Virtual Store.</div>
        </div>
      </div>
      <h5 style={{fontWeight:"700",color:"#ABABAB",margin:"0 17vw",fontSize:"1.67vw",lineHeight:'104%'}}>Interested in knowing more? Or, think our synergies is matching, we would love to get on a call for the same, and talk about it.</h5>
      <button className="contactUsButton" style={{fontWeight:"700",backgroundColor:"#0E101C",color:"#ABABAB",marginTop:"2%",borderRadius:"0.625vw",border:"1px solid #A0A0A0",padding:"0.5vw 3.5vw",fontSize:"1.52vw"}}>Contact Us</button>
      <div className="aboutEco">
        <div><img style={{width:"32vw",height:"32vw",borderRadius:"14px"}} src={Cube} alt="not found" /></div>
        <div style={{textAlign:"left",paddingLeft:"4%",paddingRight:"7vw",paddingTop:'9vw'}}>
            <h5 style={{color:"#E6E6EB",fontSize:"1.67vw",height:'1.67vw'}}>Vision</h5>
            <h1 style={{color:"#6C6A6A",fontSize:"4.4vw",fontWeight:"600",height:'5.2vw'}}>Ecosystem</h1>
            <div style={{color:"#F7F7F7",fontSize:"1.67vw",lineHeight:'107%'}}>No More Tension of giving ownership of your assets to some 3rd party platform or pay 10-30% in comissions. You hold the ownership of your assets you create with the help of decentralization</div>
        </div>
      </div>
      <div className="aboutCarousel">
           <div style={{color:"#E6E6EB",fontSize:"1.5vw",fontWeight:'700'}}>The Masterminds Behind the Magic</div>
           <h1 style={{color:"#6C6A6A",fontSize:"5.5vw",fontWeight:"600"}}>Say Hello to Team!</h1>
           <div className="carousel-container">
            <Marquee>
  <div className="carouselAbout">
    <img style={{width:"17vw",height:"25vw"}} src={frame} alt="Slide 1" className="slideAbout"/>
    <img style={{width:"17vw",height:"25vw"}} src={frame} alt="Slide 2" className="slideAbout"/>
    <img style={{width:"17vw",height:"25vw"}} src={frame} alt="Slide 3" className="slideAbout"/>
    <img style={{width:"17vw",height:"25vw"}} src={frame} alt="Slide 4" className="slideAbout"/>
    <img style={{width:"17vw",height:"25vw",marginRight:'7vw'}} src={frame} alt="Slide 10" className="slideAbout"/>
  </div>
  </Marquee>
</div>

      </div>
      <div className="aboutSocial">
<div style={{fontSize:"1.5vw",color:"#E6E6EB"}}>Our Socials</div>
<h1 style={{fontSize:"5.5vw",color:"#6c6a6a",padding:"0 8vw",fontWeight:"600"}}>Join Our Global Community</h1>
      </div>
      <div className="aboutSocialIcons" style={{display:"flex",flexDirection:"row",paddingBottom:"2vw",justifyContent:"space-around",paddingTop:"2%"}}>
        <div style={{width:"18.96vw",padding:"4.3vw 0  1.7vw",backgroundColor:"#1e262e",border:"1px solid #393556",borderRadius:"0.4167vw",textAlign:"center"}}><img style={{width:"4.5vw",height:"4.5vw"}} src={link} alt="" /><div style={{color:"#F7F7F7",paddingTop:"0.2vw",fontSize:"1.1vw",fontWeight:'600',paddingBottom:'1.5vw'}}>Twitter</div></div>
        <div style={{width:"18.96vw",padding:"4.3vw 0  1.7vw",backgroundColor:"#1e262e",border:"1px solid #393556",borderRadius:"0.4167vw",textAlign:"center"}}><img style={{width:"4.5vw",height:"4.5vw"}} src={beta} alt="" /><div style={{color:"#F7F7F7",paddingTop:"0.2vw",fontSize:"1.1vw",fontWeight:'600',paddingBottom:'1.5vw'}}>Instagram</div></div>
        <div style={{width:"18.96vw",padding:"4.3vw 0  1.7vw",backgroundColor:"#1e262e",border:"1px solid #393556",borderRadius:"0.4167vw",textAlign:"center"}}><img style={{width:"4.5vw",height:"4.5vw"}} src={face} alt="" />
        <div style={{color:"#F7F7F7",fontSize:"1.1vw",paddingTop:"0.2vw",paddingBottom:'1.5vw',fontWeight:'600'}}>Linkedin</div></div>
        <div style={{width:"18.96vw",padding:"4.3vw 0  1.7vw",backgroundColor:"#1e262e",border:"1px solid #393556",borderRadius:"0.4167vw",textAlign:"center"}}><img style={{width:"4.5vw",height:"4.5vw"}} src={insta} alt="" /><div style={{color:"#F7F7F7",paddingTop:"0.2vw",fontSize:"1.1vw",fontWeight:'600',paddingBottom:'1.5vw'}}>Hashnode</div></div>
      </div>
      </div>
    </div>
  )
}

export default About
