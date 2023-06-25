import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import {EffectComposer} from 'postprocessing';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Logo from '../Assets/company_logo.png'
import '../Style/brand.css'
import {useNavigate} from 'react-router-dom'

const InfiniteSpace = () => {
  const navigate=useNavigate()
  let add=0.1
  const canvasRef = useRef(null);
  const effect=()=>{
    add=1;
    setTimeout(()=>{
      navigate('/explore')
    },2000)
  }
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(0.1,0,0);
    camera.rotation.set(0,3.14/2,0);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current});

    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);

      
    const stars = [];
    function addStar(){
      const starGeometry = new THREE.SphereGeometry(0.05,10,10);
      const starMaterial = new THREE.MeshStandardMaterial({color: 0XFFFFFF});
      const star = new THREE.Mesh(starGeometry,starMaterial);
    
      const [x,y,z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(100));
    
      star.position.set(THREE.MathUtils.randFloat(-50,5),y,z);
      scene.add(star);
      stars.push(star);
    }
    for(let i = 0; i < 1000; i ++ ){
      addStar();
    }
    
    //lighting (wow)
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);
    function animate(){
      //star positioning
      stars.forEach(s => {s.position.x += add
                          if(s.position.x>5){
                            s.position.x = -50;
                            s.position.y = THREE.MathUtils.randFloat(-50,50);
                            s.position.y = THREE.MathUtils.randFloat(-50,50);
                          }});
      
      //window sizing
      // renderer.setSize(window.innerWidth,window.innerHeight);
      // renderer.setPixelRatio(window.devicePixelRatio);
      camera.aspect = (window.innerWidth/window.innerHeight);
      camera.updateProjectionMatrix();
    
    
                        
      //show time
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      //composer.render()
    }
    animate();

  });
  useEffect(() => {
    let alp=document.getElementById('button1')
    let alp1=document.getElementById('button2')
    setTimeout(()=>{
        alp.style.opacity=1;
        alp1.style.opacity=1;
    },4000)
  },[]);

  return (
    <>
    <div className="blur-container" style={{position:"absolute",top:"0",left:"0",right:"0"}}>
  <img src={Logo} alt="Image" className="blur-image"/>
  <div style={{display:"flex",gap:"3vw"}}>
  <button onClick={effect} id='button1' style={{position:"relative",bottom:"4vh",left:"40vw",zIndex:"2",border:"0.15vw solid #01C5BA",cursor:"pointer",padding:"0.2vw 3vw",fontSize:"1vw",borderRadius:"0.5vw",backgroundColor:"white",border:"1px solid #1c2951",fontWeight:"600",color:"#1c2951"}}>Editor</button>
  <button onClick={effect} id='button2' style={{position:"relative",bottom:"4vh",left:"40vw",zIndex:"2",border:"0.15vw solid #01C5BA",cursor:"pointer",padding:"0.2vw 2vw",fontSize:"1vw",borderRadius:"0.5vw",backgroundColor:"white",border:"1px solid #1c2951",fontWeight:"600",color:"#1c2951"}}>Explorer</button>
  </div>
</div>
  <canvas ref={canvasRef} style={{position:"absolute",top:"0",left:"0",right:"0",zIndex:"-1",width:"100vw",height:"100vh",overflow:'hidden'}}/>
  </>);
};

export default InfiniteSpace;
