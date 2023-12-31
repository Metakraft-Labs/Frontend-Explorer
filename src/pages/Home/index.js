import React, { useEffect, useState } from 'react'
import '../../Style/home.css'
import InfiniteSpace from '../../Animation/Infinitespace';
import Aiverse from '../../Assets/Aiverse.png'
import Ipad_Mini from '../../Assets/iPad Mini.png'
import Ipad_Mini1 from '../../Assets/iPad_Mini.png'
import Solana from '../../Assets/solana.png'
import Metamask from '../../Assets/Metamask.png'
import Slider from 'react-slick'
import Marquee from "react-fast-marquee";
import { Logo1, Logo2, Logo4, Logo6 } from '../../Componets/Logo.jsx'
import Logo3 from '../../Assets/Black_Transparent.png'
import Logo5 from '../../Assets/Iamal.jpg'
import Logo7 from '../../Assets/chain.png'
import Logo8 from '../../Assets/gt.jpeg'
import Logo9 from '../../Assets/nvidia.png'
import Logo10 from '../../Assets/ricge.jpg'
import Logo11 from '../../Assets/rov.jpg'
import Logo12 from '../../Assets/th.jpeg'
import Logo13 from '../../Assets/wirh.jpg'
import Logo14 from '../../Assets/Binance.png'
import { Link } from 'react-router-dom'
import Animate from '../../Assets/Animated.mp4'
import Title from '../../shared/Title'

function Home() {
    const [news,setNews]=useState('')
    const handleShow = (event) => {
        event.target.classList.add('home-head-3-11');
        event.target.classList.remove('home-head-3-12');
        setTimeout(()=>{
          event.target.classList.remove('home-head-3-11');
          event.target.classList.add('home-head-3-12');
        },2000)}
    const subscribe=async ()=>{
        const crudresponse = await fetch(
            "https://blog.metakraft.live/api/newsletter/subscribe",
          {
              method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email:news,
              publicationId: "648e275cb3c039fc791a9e2b"
            })
           }
         );
         setNews('')
          return await crudresponse.json();
    }
    const play = () => {
        let alp = document.getElementsByTagName('video')[0]
        if (alp) alp.play()
    }
    const settings = {
        dots: false,
        infinite: true, // Enable infinite loop
        speed: 1000,
        slidesToShow: 9, // Number of slides to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false
    };
    return (
        <>
        <Title title={"Home"}/>
        <div style={{ width: "100vw", fontFamily: 'Roboto' }}>
            <InfiniteSpace />
            <div className='punc1'>?</div>
            <div className='punc2'>#</div>
            <div className='punc3'>$</div>

            <div className='home-live'>
                <div>
                    <img className='home-live-1' src={Aiverse} alt="image" />
                </div>
                <div className='home-live-2'>We are live! Learn More -&gt;</div>
            </div>
            <div className='home-partner'>
                <div className='home-partner-1'>Ecosystem &</div>
                <div className='home-partner-2'>Strategic Partners</div>
                <div style={{ display: 'flex' }}>
                    <div id="slideshow" style={{ padding: "1.5vw", paddingTop: "4vw", width: "100%", background: 'transparent' }}>
                        <Slider {...settings}>
                            <div className="explore-logo-slide"><Logo1 /></div>
                            <div className="explore-logo-slide"><Logo2 /></div>
                            <div className="explore-logo-slide"><img style={{ width: "4.5vw", height: "4.5vw", position: "relative", zIndex: "1", backgroundColor: 'white' }} src={Logo3} alt="image" /></div>
                            <div className="explore-logo-slide"><Logo4 /></div>
                            <div className="explore-logo-slide"><img style={{ width: "4.5vw", height: "4.5vw", position: "relative", zIndex: "1" }} src={Logo5} alt="image" /></div>
                            <div className="explore-logo-slide"><Logo6 /></div>
                            <div className="explore-logo-slide"><img style={{ width: "6.5vw", height: "4.5vw", position: "relative", zIndex: "1" }} src={Logo7} alt="image" /></div>
                            <div className="explore-logo-slide"><img style={{ width: "4.5vw", height: "4.5vw", position: "relative", zIndex: "1" }} src={Logo8} alt="image" /></div>
                            <div className="explore-logo-slide"><img style={{ width: "4.5vw", height: "4.5vw", position: "relative", zIndex: "1" }} src={Logo9} alt="image" /></div>
                            <div className="explore-logo-slide"><img style={{ width: "4.5vw", height: "4.5vw", position: "relative", zIndex: "1" }} src={Logo10} alt="image" /></div>
                            <div className="explore-logo-slide"><img style={{ width: "4.5vw", height: "4.5vw", position: "relative", zIndex: "1" }} src={Logo11} alt="image" /></div>
                            <div className="explore-logo-slide"><img style={{ width: "4.5vw", height: "4.5vw", position: "relative", zIndex: "1" }} src={Logo12} alt="image" /></div>
                            <div className="explore-logo-slide"><img style={{ width: "4.5vw", height: "4.5vw", position: "relative", zIndex: "1" }} src={Logo13} alt="image" /></div>
                            <div className="explore-logo-slide"><img style={{ width: "4.5vw", height: "4.5vw", position: "relative", zIndex: "1" }} src={Logo14} alt="image" /></div>
                        </Slider>
                    </div>
                </div>
                <div className='home-demo'>
                    <video className='home-demo-video' src={Animate}>
                        Your browser does not support the video tag.
                    </video>

                </div>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <button className='home-partner-3 home-head-3-12' onClick={handleShow}>Watch Demo</button>
                </div>
                <div className='home-partner-4'>
                    <div style={{ paddingTop: '4vw' }}>
                        <div className='home-partner-4-2'>Explore Experience!</div>
                        <div className='home-partner-4-2'>Explore, Create, Connect</div>
                        <div className='home-partner-4-3' style={{ marginTop: '2vw' }}>Unleash your imagination with an AI-driven, browser-based</div>
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
                    <div style={{ paddingTop: '8vw' }}>
                        <div className='home-partner-4-2'>Designed to Scale as</div>
                        <div className='home-partner-4-2'>your need Grows</div>
                        <div className='home-partner-4-3' style={{ marginTop: '2vw' }}>Metakraft is designed to scale with your business, creating</div>
                        <div className='home-partner-4-3'>engaging virtual environments that can attract and retain as</div>
                        <div className='home-partner-4-3'>users grows while generating revenue.</div>
                    </div>
                </div>

                <div className='home-floor'>
                    <div className='home-floor-1'>
                        <div style={{ marginRight: "1.5vw" }}>
                            <div className='home-floor-1-1'>
                                <div className='home-floor-1-2' style={{ fontSize: '3.17vw' }}>Browser</div>
                                <div className='home-floor-1-3'>Supported</div>
                            </div>
                            <div className='home-floor-1-1'>
                                <div className='home-floor-1-2' style={{ fontSize: '3.17vw' }}>AI Enabled</div>
                                <div className='home-floor-1-3'>Asset Design</div>
                            </div>
                        </div>
                        <div>
                            <div className='home-floor-1-1' style={{ marginTop: '0' }}>
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
                        <img src={Metamask} alt="image" style={{ width: '20.96vw', height: '19.47vw' }} />
                    </div>
                </div>
                <div className='home-slide'>
                    <div className='home-slide-1'>What Others Says</div>
                    <div className='home-slide-2'>Made by Builder's for the Builder's</div>
                    <Marquee>
                        <div className="home-slide-3">
                            <div className='homeslide home-slide-3-1'>
                                <svg width="5.347vw" height="0.972vw" viewBox="0 0 77 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 2031">
                                        <path id="Star 1" d="M70.5 0L71.9593 4.83688H76.6819L72.8613 7.82624L74.3206 12.6631L70.5 9.67376L66.6794 12.6631L68.1387 7.82624L64.3181 4.83688H69.0407L70.5 0Z" fill="black" />
                                        <path id="Star 5" d="M6.5 0L7.95934 4.83688H12.6819L8.86126 7.82624L10.3206 12.6631L6.5 9.67376L2.6794 12.6631L4.13874 7.82624L0.318133 4.83688H5.04066L6.5 0Z" fill="black" />
                                        <path id="Star 2" d="M54.5 0L55.9593 4.83688H60.6819L56.8613 7.82624L58.3206 12.6631L54.5 9.67376L50.6794 12.6631L52.1387 7.82624L48.3181 4.83688H53.0407L54.5 0Z" fill="black" />
                                        <path id="Star 3" d="M38.5 0L39.9593 4.83688H44.6819L40.8613 7.82624L42.3206 12.6631L38.5 9.67376L34.6794 12.6631L36.1387 7.82624L32.3181 4.83688H37.0407L38.5 0Z" fill="black" />
                                        <path id="Star 4" d="M22.5 0L23.9593 4.83688H28.6819L24.8613 7.82624L26.3206 12.6631L22.5 9.67376L18.6794 12.6631L20.1387 7.82624L16.3181 4.83688H21.0407L22.5 0Z" fill="black" />
                                    </g>
                                </svg>
                                <div style={{ lineHeight: '120%', fontSize: '1.2vw', paddingTop: '0.7vw' }}>Though I am building @rariko_info and I’m super bullish about it, I have my bets on our fellow Indian startup @AIVerse_Dai</div>
                                <div style={{ fontSize: '1.1vw', fontWeight: '600', paddingTop: '0.7vw' }}>Mani Kumar</div>
                            </div>
                            <div className='homeslide home-slide-3-1'>
                                <svg width="5.347vw" height="0.972vw" viewBox="0 0 77 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 2031">
                                        <path id="Star 1" d="M70.5 0L71.9593 4.83688H76.6819L72.8613 7.82624L74.3206 12.6631L70.5 9.67376L66.6794 12.6631L68.1387 7.82624L64.3181 4.83688H69.0407L70.5 0Z" fill="black" />
                                        <path id="Star 5" d="M6.5 0L7.95934 4.83688H12.6819L8.86126 7.82624L10.3206 12.6631L6.5 9.67376L2.6794 12.6631L4.13874 7.82624L0.318133 4.83688H5.04066L6.5 0Z" fill="black" />
                                        <path id="Star 2" d="M54.5 0L55.9593 4.83688H60.6819L56.8613 7.82624L58.3206 12.6631L54.5 9.67376L50.6794 12.6631L52.1387 7.82624L48.3181 4.83688H53.0407L54.5 0Z" fill="black" />
                                        <path id="Star 3" d="M38.5 0L39.9593 4.83688H44.6819L40.8613 7.82624L42.3206 12.6631L38.5 9.67376L34.6794 12.6631L36.1387 7.82624L32.3181 4.83688H37.0407L38.5 0Z" fill="black" />
                                        <path id="Star 4" d="M22.5 0L23.9593 4.83688H28.6819L24.8613 7.82624L26.3206 12.6631L22.5 9.67376L18.6794 12.6631L20.1387 7.82624L16.3181 4.83688H21.0407L22.5 0Z" fill="black" />
                                    </g>
                                </svg>
                                <div style={{ lineHeight: '120%', fontSize: '1.2vw', paddingTop: '0.7vw' }}>I’m holding out hope they’ll soon introduce extra cool and amazing capabilities.</div>
                                <div style={{ fontSize: '1.1vw', fontWeight: '600', paddingTop: '0.7vw' }}>Jayson Caves</div>
                            </div>
                            <div className='home-slide-3-1'>
                                <svg width="5.347vw" height="0.972vw" viewBox="0 0 77 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 2031">
                                        <path id="Star 1" d="M70.5 0L71.9593 4.83688H76.6819L72.8613 7.82624L74.3206 12.6631L70.5 9.67376L66.6794 12.6631L68.1387 7.82624L64.3181 4.83688H69.0407L70.5 0Z" fill="black" />
                                        <path id="Star 5" d="M6.5 0L7.95934 4.83688H12.6819L8.86126 7.82624L10.3206 12.6631L6.5 9.67376L2.6794 12.6631L4.13874 7.82624L0.318133 4.83688H5.04066L6.5 0Z" fill="black" />
                                        <path id="Star 2" d="M54.5 0L55.9593 4.83688H60.6819L56.8613 7.82624L58.3206 12.6631L54.5 9.67376L50.6794 12.6631L52.1387 7.82624L48.3181 4.83688H53.0407L54.5 0Z" fill="black" />
                                        <path id="Star 3" d="M38.5 0L39.9593 4.83688H44.6819L40.8613 7.82624L42.3206 12.6631L38.5 9.67376L34.6794 12.6631L36.1387 7.82624L32.3181 4.83688H37.0407L38.5 0Z" fill="black" />
                                        <path id="Star 4" d="M22.5 0L23.9593 4.83688H28.6819L24.8613 7.82624L26.3206 12.6631L22.5 9.67376L18.6794 12.6631L20.1387 7.82624L16.3181 4.83688H21.0407L22.5 0Z" fill="black" />
                                    </g>
                                </svg>
                                <div style={{ lineHeight: '120%', fontSize: '1.2vw', paddingTop: '0.7vw' }}>Very interesting project with energetic founders. Looking forward to Great things from Aiverse! Good luck</div>
                                <div style={{ fontSize: '1.1vw', fontWeight: '600', paddingTop: '0.7vw' }}>Prasanna Kondapaneni</div>
                            </div>
                            <div className='home-slide-3-1'>
                                <svg width="5.347vw" height="0.972vw" viewBox="0 0 77 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 2031">
                                        <path id="Star 1" d="M70.5 0L71.9593 4.83688H76.6819L72.8613 7.82624L74.3206 12.6631L70.5 9.67376L66.6794 12.6631L68.1387 7.82624L64.3181 4.83688H69.0407L70.5 0Z" fill="black" />
                                        <path id="Star 5" d="M6.5 0L7.95934 4.83688H12.6819L8.86126 7.82624L10.3206 12.6631L6.5 9.67376L2.6794 12.6631L4.13874 7.82624L0.318133 4.83688H5.04066L6.5 0Z" fill="black" />
                                        <path id="Star 2" d="M54.5 0L55.9593 4.83688H60.6819L56.8613 7.82624L58.3206 12.6631L54.5 9.67376L50.6794 12.6631L52.1387 7.82624L48.3181 4.83688H53.0407L54.5 0Z" fill="black" />
                                        <path id="Star 3" d="M38.5 0L39.9593 4.83688H44.6819L40.8613 7.82624L42.3206 12.6631L38.5 9.67376L34.6794 12.6631L36.1387 7.82624L32.3181 4.83688H37.0407L38.5 0Z" fill="black" />
                                        <path id="Star 4" d="M22.5 0L23.9593 4.83688H28.6819L24.8613 7.82624L26.3206 12.6631L22.5 9.67376L18.6794 12.6631L20.1387 7.82624L16.3181 4.83688H21.0407L22.5 0Z" fill="black" />
                                    </g>
                                </svg>
                                <div style={{ lineHeight: '120%', fontSize: '1.2vw', paddingTop: '0.7vw' }}>Great to see Aiverse’s  integrations with lighthouse, Very Excited for their product!</div>
                                <div style={{ fontSize: '1.1vw', fontWeight: '600', paddingTop: '0.7vw' }}>Nandit Mehra</div>
                            </div>
                            <div className='home-slide-3-1'>
                                <svg width="5.347vw" height="0.972vw" viewBox="0 0 77 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 2031">
                                        <path id="Star 1" d="M70.5 0L71.9593 4.83688H76.6819L72.8613 7.82624L74.3206 12.6631L70.5 9.67376L66.6794 12.6631L68.1387 7.82624L64.3181 4.83688H69.0407L70.5 0Z" fill="black" />
                                        <path id="Star 5" d="M6.5 0L7.95934 4.83688H12.6819L8.86126 7.82624L10.3206 12.6631L6.5 9.67376L2.6794 12.6631L4.13874 7.82624L0.318133 4.83688H5.04066L6.5 0Z" fill="black" />
                                        <path id="Star 2" d="M54.5 0L55.9593 4.83688H60.6819L56.8613 7.82624L58.3206 12.6631L54.5 9.67376L50.6794 12.6631L52.1387 7.82624L48.3181 4.83688H53.0407L54.5 0Z" fill="black" />
                                        <path id="Star 3" d="M38.5 0L39.9593 4.83688H44.6819L40.8613 7.82624L42.3206 12.6631L38.5 9.67376L34.6794 12.6631L36.1387 7.82624L32.3181 4.83688H37.0407L38.5 0Z" fill="black" />
                                        <path id="Star 4" d="M22.5 0L23.9593 4.83688H28.6819L24.8613 7.82624L26.3206 12.6631L22.5 9.67376L18.6794 12.6631L20.1387 7.82624L16.3181 4.83688H21.0407L22.5 0Z" fill="black" />
                                    </g>
                                </svg>
                                <div style={{ lineHeight: '120%', fontSize: '1.2vw', paddingTop: '0.7vw' }}>Excellent bringing opportunity to all users  there’s a lot of helping features that can helps us!</div>
                                <div style={{ fontSize: '1.1vw', fontWeight: '600', paddingTop: '0.7vw' }}>Disney</div>
                            </div>
                            <div className='homeslide home-slide-3-1'>
                                <svg width="5.347vw" height="0.972vw" viewBox="0 0 77 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 2031">
                                        <path id="Star 1" d="M70.5 0L71.9593 4.83688H76.6819L72.8613 7.82624L74.3206 12.6631L70.5 9.67376L66.6794 12.6631L68.1387 7.82624L64.3181 4.83688H69.0407L70.5 0Z" fill="black" />
                                        <path id="Star 5" d="M6.5 0L7.95934 4.83688H12.6819L8.86126 7.82624L10.3206 12.6631L6.5 9.67376L2.6794 12.6631L4.13874 7.82624L0.318133 4.83688H5.04066L6.5 0Z" fill="black" />
                                        <path id="Star 2" d="M54.5 0L55.9593 4.83688H60.6819L56.8613 7.82624L58.3206 12.6631L54.5 9.67376L50.6794 12.6631L52.1387 7.82624L48.3181 4.83688H53.0407L54.5 0Z" fill="black" />
                                        <path id="Star 3" d="M38.5 0L39.9593 4.83688H44.6819L40.8613 7.82624L42.3206 12.6631L38.5 9.67376L34.6794 12.6631L36.1387 7.82624L32.3181 4.83688H37.0407L38.5 0Z" fill="black" />
                                        <path id="Star 4" d="M22.5 0L23.9593 4.83688H28.6819L24.8613 7.82624L26.3206 12.6631L22.5 9.67376L18.6794 12.6631L20.1387 7.82624L16.3181 4.83688H21.0407L22.5 0Z" fill="black" />
                                    </g>
                                </svg>
                                <div style={{ lineHeight: '120%', fontSize: '1.2vw', paddingTop: '0.7vw' }}>Excited to see Aiverse making waves as an efficient tool for developers and creators.</div>
                                <div style={{ fontSize: '1.1vw', fontWeight: '600', paddingTop: '0.7vw' }}>Sarah Jones</div>
                            </div>
                        </div>
                    </Marquee>
                    <div className='home-slide-4'>
                        <Marquee direction='right'>
                            <div>1000+ Signups</div>
                            <div>300+ Beta Users</div>
                            <div>100+ Mints</div>
                            <div>10+ Studio Partners</div>
                        </Marquee>
                    </div>
                </div>
                <div className='home-browsing'>
                    <div className='home-browsing-1'>Go Beyond Browsing</div>
                    <div className='home-browsing-2'>
                        <div>Create new door of experience for your Friends, Fans & </div>
                        <div>Clients</div>
                    </div>
                    <button className='home-browsing-3'><Link to='/feature'>Explore Features</Link></button>
                    <div className='home-browsing-4'>
                        <img src={Solana} alt="image" />
                    </div>
                    <div className='home-browsing-5'>
                        <div className='home-browsing-5-1'>Stay Updated with Latest</div>
                        <div className='home-browsing-5-2'>Get Your Newsletter</div>
                        <div className='home-browsing-6'>
                            <div className='home-browsing-6-1' style={{ cursor: 'pointer' }} onClick={subscribe}>&lt;</div>
                            <input type="text" value={news} onChange={(event)=>{setNews(event.target.value)}} className='home-browsing-6-2' placeholder='Enter Your Email' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
