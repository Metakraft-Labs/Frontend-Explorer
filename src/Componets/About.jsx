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
function About() {
    useEffect(()=>{
        function addCloneSlides() {
            const carousel = document.querySelector('.carouselAbout');
            const slides = carousel.querySelectorAll('.slideAbout');
          
            slides.forEach((slide) => {
              const cloneSlide = slide.cloneNode(true);
              carousel.appendChild(cloneSlide);
            });
          }
          
          addCloneSlides();   
          
    },[])
  return (
    <div className="aboutBody">
      <div className="aboutMetaImg" style={{paddingTop:"0"}}>
        <div className="backImg">
      <h1 className="aboutConnectHead" style={{paddingTop:"27%",fontSize:"4.5vw",fontWeight:"600",color:"#6C6A6A",fontFamily:"Epilogue"}}>Connect Collect Create</h1>
      <div className="aboutContainImg" style={{color:"#F7F7F7",marginLeft:"20%",marginRight:"20%",fontSize:"0.9vw",fontFamily:"Sofia Sans"}}>Metakraft is a passion that was born out of a simple idea - to make communication interactive and to give life to people’s creativity. Our journey began with a small project to make virtual spaces for a small community to come together and have fun. And with one year of effort and Bootstrapping, we have created an ecosystem that supports the needs of creators and metaverse enthusiasts.We understand, creation is not just the stopping point but enabling people with the ownership and easy monetization keeps people engaged and motivated to be part of a bigger revolution</div>
      <h4 className="aboutMissionHead"style={{fontSize:"1.5vw",fontWeight:"800",paddingTop:"10%",fontFamily:"Epilogue"}}>Our Mission</h4>
      <div style={{color:"#F7F7F7",marginLeft:"20%",marginRight:"20%",fontFamily:"Sofia Sans",fontSize:"0.9vw"}}>Becoming one stop platform for next 1 Billion Internet Users. Enabling collaboration, creation and giving back control of monetization and ownership back to the people with the help of Decentralization</div>
      <h4 style={{paddingTop:"15%",color:"#E6E6EB",fontWeight:"400",fontSize:"1.5vw"}}>Our Solution</h4>
      <h1 className="aboutConnectHead" style={{paddingTop:"1%",fontSize:"4.5vw",fontWeight:"600",color:"#6C6A6A",fontFamily:"Epilogue"}}>The Metakraft Method</h1>
      <div className="aboutMethodCards" style={{paddingTop:"5%",paddingBottom:"5%"}}>
        <div style={{textAlign:"left",border:"1px solid #393556",padding:"1.25vw",borderRadius:"4px"}}>
            <div><img src={token1}  alt="not found" /></div>
            <h5 style={{fontWeight:"700",color:"white",marginBottom:"0",marginTop:"0.5vw",fontSize:"1vw"}}>No-Code Tools</h5>
            <div style={{color:"#F7F7F7",fontFamily:"Sofia Sans",fontSize:"0.9vw"}}>Browser based no-code tools to boost productivity and create immersive virtual experiences with ease</div>
        </div>
        <div style={{textAlign:"left",border:"1px solid #393556",margin:"0 12vw",padding:"1.25vw",borderRadius:"4px"}}>
        <div><img src={token2} style={{textAlign:"left"}} alt="not found" /></div>
        <h5 style={{fontWeight:"700",color:"white",marginBottom:"0",marginTop:"0.5vw",fontSize:"1vw"}}>Decentralized Marketplace</h5>
        <div style={{color:"#F7F7F7",fontFamily:"Sofia Sans",fontSize:"0.9vw"}}>No More Tension of giving ownership of your assets to some 3rd party platform or pay 10-30% in comissions. You hold the ownership of your assets you create with the help of decentralization</div>
        </div>
        <div style={{textAlign:"left",border:"1px solid #393556",padding:"1.25vw",borderRadius:"4px"}}>
        <div><img src={token3} style={{textAlign:"left"}} alt="not found" /></div>
        <h5 style={{fontWeight:"700",color:"white",marginBottom:"0",marginTop:"0.5vw",fontSize:"1vw"}}>Virtual Spaces</h5>
        <div style={{color:"#F7F7F7",fontFamily:"Sofia Sans",fontSize:"0.9vw"}}>No More Tension of giving ownership of your assets to some 3rd party platform or pay 10-30% in comissions. You hold the ownership of your assets you create with the help of decentralization</div>
        </div>
      </div>
      </div>
      <h5 style={{fontWeight:"600",color:"#ABABAB",margin:"0 31%",fontFamily:"Epilogue",fontSize:"1.08vw"}}>Interested in knowing more? Or, think our synergies is matching, we would love to get on a call for the same, and talk about it.</h5>
      <button className="contactUsButton" style={{fontWeight:"500",backgroundColor:"rgba(255, 255, 255, 0.2)",color:"#ABABAB",marginTop:"2%",borderRadius:"6px",border:"1px solid #A0A0A0",padding:"0.5vw 3.5vw",fontFamily:"Epilogue",fontSize:"1vw"}}>Contact Us</button>
      <div className="aboutEco">
        <div><img style={{width:"32vw",height:"32vw",borderRadius:"14px"}} src={eco} alt="not found" /></div>
        <div style={{textAlign:"left",paddingLeft:"4%",paddingRight:"21%"}}>
            <h5 style={{color:"#E6E6EB",marginBottom:"0",fontFamily:"Epilogue",fontSize:"1vw"}}>Vision</h5>
            <h1 style={{color:"#6C6A6A",fontSize:"4.5vw",fontWeight:"600",fontFamily:"Epilogue"}}>Ecosystem</h1>
            <div style={{color:"#F7F7F7",paddingTop:"3%",fontFamily:"Sofia Sans",fontSize:"0.9vw"}}>No More Tension of giving ownership of your assets to some 3rd party platform or pay 10-30% in comissions. You hold the ownership of your assets you create with the help of decentralization</div>
        </div>
      </div>
      <div className="aboutCarousel">
           <div style={{color:"#E6E6EB",fontSize:"1.5vw",fontFamily:"Epilogue"}}>The Masterminds Behind the Magic</div>
           <h1 style={{color:"#6C6A6A",fontSize:"4.5vw",fontWeight:"600",fontFamily:"Epilogue"}}>Say Hello to Team!</h1>
           <div className="carousel-container">
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
    <img style={{width:"17vw",height:"25vw"}} src={frame} alt="Slide 10" className="slideAbout"/>
  </div>
</div>

      </div>
      <div className="aboutSocial">
<div style={{fontSize:"1.5vw",color:"#E6E6EB",fontFamily:"Epilogue"}}>Our Socials</div>
<h1 style={{fontSize:"4.5vw",color:"#6c6a6a",padding:"0 20vw",fontFamily:"Epilogue",fontWeight:"600"}}>Join Our Global Community</h1>
      </div>
      <div className="aboutSocialIcons" style={{display:"flex",flexDirection:"row",justifyContent:"space-around",paddingTop:"2%"}}>
        <div style={{width:"18%",height:"9vw",paddingTop:"2.5vw",backgroundColor:"#1e262e",border:"1px solid #393556",borderRadius:"6px"}}><img style={{width:"3vw",height:"3vw",paddingTop:"3px"}} src={face} alt="" />
        <div style={{color:"#F7F7F7",fontFamily:"Epilogue",fontSize:"0.9vw"}}>Linkedin</div></div>
        <div style={{width:"18%",height:"9vw",paddingTop:"2.5vw",backgroundColor:"#1e262e",border:"1px solid #393556",borderRadius:"6px"}}><img style={{width:"3vw",height:"3vw"}} src={insta} alt="" /><div style={{color:"#F7F7F7",fontFamily:"Epilogue",paddingTop:"3px",fontSize:"0.9vw"}}>SubStack</div></div>
        <div style={{width:"18%",height:"9vw",paddingTop:"2.5vw",backgroundColor:"#1e262e",border:"1px solid #393556",borderRadius:"6px"}}><img style={{width:"3vw",height:"3vw"}} src={link} alt="" /><div style={{color:"#F7F7F7",fontFamily:"Epilogue",paddingTop:"3px",fontSize:"0.9vw"}}>Twitter</div></div>
        <div style={{width:"18%",height:"9vw",paddingTop:"2.5vw",backgroundColor:"#1e262e",border:"1px solid #393556",borderRadius:"6px"}}><img style={{width:"3vw",height:"3vw"}} src={beta} alt="" /><div style={{color:"#F7F7F7",fontFamily:"Epilogue",paddingTop:"3px",fontSize:"0.9vw"}}>Instagram</div></div>
      </div>
      </div>
    </div>
  )
}

export default About
