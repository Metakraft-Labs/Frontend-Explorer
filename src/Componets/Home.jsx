import React,{useEffect} from 'react'
import '../Style/home.css'
import InfiniteSpace from '../Animation/Infinitespace';
import Aiverse from '../Assets/Aiverse.png'
import Logo1 from '../Assets/logo_1.png'
import Logo2 from '../Assets/logo_2.png'
import Logo3 from '../Assets/logo_3.png'
import Logo4 from '../Assets/logo_4.png'
import Logo5 from '../Assets/logo_5.png'
import Logo6 from '../Assets/logo_6.png'
import Logo7 from '../Assets/logo_7.png'
import Logo8 from '../Assets/logo_8.png'
import Ipad_Mini from '../Assets/iPad Mini.png'
import Ipad_Mini1 from '../Assets/iPad_Mini.png'
import Solana from '../Assets/solana.png'
import Metamask from '../Assets/Metamask.png'
import Slider from 'react-slick'
import { motion } from 'framer-motion';


function Home() {
  const slideVariants = {
    initial: { x: '-5%' },
    animate: { x: '-20%' },
    transition: { ease: 'linear', duration: 10, repeat: Infinity },
  };
  const settings = {
    dots: false,
    infinite: true, // Enable infinite loop
    speed: 1000,
    slidesToShow: 9, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    arrows:false
  };

  return (
    <div style={{overflow:"hidden",width:"100vw"}}>
    <div className="homeBody" >
      <InfiniteSpace/>
    </div>
    <div className='home-head'>
      <div className='home-head-1'>Making Internet</div>
      <div className='home-head-2'>Super Fun!</div>
      <div className='home-head-3'>
        <button className='home-head-3-1'>Early Access</button>
        <button className='home-head-3-2'>Refer & Win</button>
      </div>
    </div>
    <div className='home-live'>
      <div>
        <img className='home-live-1' src={Aiverse} alt="image" />
      </div>
      <div className='home-live-2'>We are live! Learn More -&gt;</div>
    </div>
    <div className='home-partner'>
    <div className='home-partner-1'>Ecosystem &</div>
    <div className='home-partner-2'>Strategic Partners</div>
    <div id="slideshow" style={{padding:"1.5vw",paddingTop:"5vw",width:"100%",background:'transparent'}}>
<Slider {...settings}>
    <div className="explore-logo-slide"><img style={{width:"4.5vw",height:"4.5vw",position:"relative",zIndex:"1"}} src={Logo1} alt="image" /></div>
    <div className="explore-logo-slide"><img style={{width:"4.5vw",height:"4.5vw",position:"relative",zIndex:"1"}} src={Logo2} alt="image" /></div>
    <div className="explore-logo-slide"><img style={{width:"4.5vw",height:"4.5vw",position:"relative",zIndex:"1"}} src={Logo1} alt="image" /></div>
    <div className="explore-logo-slide"><img style={{width:"4.5vw",height:"4.5vw",position:"relative",zIndex:"1"}} src={Logo2} alt="image" /></div>
    <div className="explore-logo-slide"><img style={{width:"4.5vw",height:"4.5vw",position:"relative",zIndex:"1"}} src={Logo3} alt="image" /></div>
    <div className="explore-logo-slide"><img style={{width:"4.5vw",height:"4.5vw",position:"relative",zIndex:"1"}} src={Logo4} alt="image" /></div>
    <div className="explore-logo-slide"><img style={{width:"4.5vw",height:"4.5vw",position:"relative",zIndex:"1"}} src={Logo5} alt="image" /></div>
    <div className="explore-logo-slide"><img style={{width:"4.5vw",height:"4.5vw",position:"relative",zIndex:"1"}} src={Logo6} alt="image" /></div>
    <div className="explore-logo-slide"><img style={{width:"4.5vw",height:"4.5vw",position:"relative",zIndex:"1"}} src={Logo7} alt="image" /></div>
    <div className="explore-logo-slide"><img style={{width:"4.5vw",height:"4.5vw",position:"relative",zIndex:"1"}} src={Logo8} alt="image" /></div>
    <div className="explore-logo-slide"><img style={{width:"4.5vw",height:"4.5vw",position:"relative",zIndex:"1"}} src={Logo7} alt="image" /></div>
    <div className="explore-logo-slide"><img style={{width:"4.5vw",height:"4.5vw",position:"relative",zIndex:"1"}} src={Logo8} alt="image" /></div>
</Slider>
</div>
    <div className='home-demo'>
    <svg width="6.28vw" height="6.28vw" viewBox="0 0 119 117" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_283_10)">
<ellipse cx="59.5" cy="54.5" rx="55.5" ry="54.5" fill="#D9D9D9"/>
<path d="M83.996 56.43L74.6674 63.6643L58.1512 76.4726L55.1027 78.8367C53.13 80.3665 50.2609 78.9583 50.2643 76.462L50.2695 72.6042L50.3195 35.4287L50.3247 31.571C50.3281 29.0746 53.201 27.6742 55.1695 29.2093L58.2116 31.5816L74.6933 44.4343L84.0023 51.6937C85.5452 52.8968 85.542 55.2311 83.996 56.43Z" fill="black" stroke="black" stroke-width="313"/>
</g>
<defs>
<filter id="filter0_d_283_10" x="0" y="0" width="119" height="117" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_283_10"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_283_10" result="shape"/>
</filter>
</defs>
</svg>
    </div>
    <div style={{width:"100%",textAlign:"center"}}>
    <button className='home-partner-3'>Watch Demo</button>
    </div>
    <div className='home-partner-4'>
    <div style={{paddingTop:'4vw'}}>
      <div className='home-partner-4-2'>Explore Experience!</div>
      <div className='home-partner-4-2'>Explore, Create, Connect</div>
      <div className='home-partner-4-3' style={{paddingTop:'2vw'}}>Unleash your imagination with an AI-driven, browser-based</div>
      <div className='home-partner-4-3'>platform. Build, customize, and connect in a secure</div>
      <div className='home-partner-4-3'> environment, exploring endless possibilities and redefining</div>
      <div className='home-partner-4-3'>the virtual realm effortlessly.</div>
    </div>
    <div>
      <img className='home-partner-4-1' src={Ipad_Mini} alt="image" />
    </div>
    </div>
    <div className='home-partner-5'>
    <div>
      <img className='home-partner-4-1' src={Ipad_Mini1} alt="image" />
    </div>
    <div style={{paddingTop:'8vw'}}>
      <div className='home-partner-4-2'>Designed to Scale as</div>
      <div className='home-partner-4-2'>your need Grows</div>
      <div className='home-partner-4-3' style={{paddingTop:'2vw'}}>Metakraft is designed to scale with your business, creating</div>
      <div className='home-partner-4-3'>engaging virtual environments that can attract and retain as</div>
      <div className='home-partner-4-3'>users grows while generating revenue.</div>
    </div>
    </div>
   
    <div className='home-floor'>
      <div className='home-floor-1'>
      <div style={{marginRight:"1.5vw"}}>
        <div className='home-floor-1-1'>
          <div className='home-floor-1-2' style={{fontSize:'1.5vw'}}>Browser</div>
          <div className='home-floor-1-3'>Supported</div>
        </div>
        <div className='home-floor-1-1'>
          <div className='home-floor-1-2' style={{fontSize:'1.5vw'}}>AI Enabled</div>
          <div className='home-floor-1-3'>Asset Design</div>
        </div>
      </div>
      <div>
        <div className='home-floor-1-1' style={{marginTop:'0'}}>
          <div className='home-floor-1-2'>500K+</div>
          <div className='home-floor-1-3'>Assets to use</div>
        </div>
        <div className='home-floor-1-1'>
          <div className='home-floor-1-2'>Mint</div>
          <div className='home-floor-1-3'>3D Assets</div>
        </div>
      </div>
      </div>
      <div>
        <img src={Metamask} alt="image" style={{width:'16.56vw',height:'15.36vw'}}/>
      </div>
    </div>
    <div className='home-slide'>
      <div className='home-slide-1'>What Others Says</div>
      <div className='home-slide-2'>Made by Builder's for the Builder's</div>
      <motion.div className='home-slideshow'>
      <motion.div className="home-slide-3"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              transition={slideVariants.transition}
      
      >
          <motion.div  className='home-slide-3-1'></motion.div>
        <motion.div  className='home-slide-3-1'></motion.div>
        <motion.div  className='home-slide-3-2'>
          <div className='home-slide-3-2-1'></div>
          <div className='home-slide-3-2-2'>
            <div className='home-slide-3-2-2-1'></div>
            <div className='home-slide-3-2-2-2'></div>
          </div>
        </motion.div>
        <motion.div  className='home-slide-3-1'></motion.div>
        <motion.div  className='home-slide-3-1'></motion.div>
        <motion.div  className='home-slide-3-1'></motion.div>
        <motion.div  className='home-slide-3-1'></motion.div>
     </motion.div>
     </motion.div>
      <div className='home-slide-4'>
        <div>1000+ Signups</div>
        <div>300+ Beta Users</div>
        <div>100+ Mints</div>
        <div>10+ Studio Partners</div>
      </div>
    </div>
    <div className='home-browsing'>
      <div className='home-browsing-1'>Go Beyond Browsing</div>
      <div className='home-browsing-2'>
        <div>Create new door of experience for your Friends, Fans & </div>
        <div>Clients</div>
      </div>
      <button className='home-browsing-3'>Explore Features</button>
      <div className='home-browsing-4'>
      <img src={Solana} alt="image" />
      </div>
      <div className='home-browsing-5'>
        <div className='home-browsing-5-1'>Stay Updated with Latest</div>
        <div className='home-browsing-5-2'>Get Your Newsletter</div>
      <div className='home-browsing-6'>
        <div className='home-browsing-6-1'>&lt;</div>
        <div style={{padding:"0",margin:"0"}}>
        <input type="text" className='home-browsing-6-2' placeholder='Enter Your Email'/>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Home
