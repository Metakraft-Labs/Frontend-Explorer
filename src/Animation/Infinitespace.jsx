import React, { useRef, useEffect,useState } from 'react';
import * as THREE from 'three';
import '../Style/brand.css'
import {useNavigate} from 'react-router-dom'
import {Modal1,Modal2} from '../Componets/modal.jsx'

const InfiniteSpace = () => {
  const navigate=useNavigate()
  let add=1
  const canvasRef = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(0.1,0,0);
    camera.rotation.set(0,3.14/2,0);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current});

    renderer.setSize(window.innerWidth, Math.min(0.485*window.innerWidth,window.innerWidth));
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    add=0.1;
    event.target.classList.add('home-head-3-11');
    event.target.classList.remove('home-head-3-12');
    setTimeout(()=>{
      add=1;    
      console.log(event.target)
      event.target.classList.remove('home-head-3-11');
      event.target.classList.add('home-head-3-12');
    },2000)}
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (event) => {
    setShow1(true);
    add=0.1;
    event.target.classList.add('home-head-3-11');
    event.target.classList.remove('home-head-3-12');
    setTimeout(()=>{
      add=1;    
      console.log(event.target)
      event.target.classList.remove('home-head-3-11');
      event.target.classList.add('home-head-3-12');
    },2000)
    
  }
  return (
    <>
    <div className='homeBody' style={{width:'100%'}}>
  <canvas ref={canvasRef} style={{position:"absolute",top:"0",left:"0",right:"0",zIndex:"-1"}}/>
  </div>
  <div className='home-head' style={{width:'100%'}}>
      <div className='home-head-1'>Making Internet</div>
      <div className='home-head-2'>Super Fun!</div>
      <div className='home-head-3'>
        <button className='home-head-3-1 home-head-3-12' onClick={handleShow}>Early Access</button>
        <button className='home-head-3-2 home-head-3-12' onClick={handleShow1}>Refer & Win</button>
      </div>
    </div>
    <Modal1 show={show}  close={handleClose} />
    <Modal2 show={show1}  handleClose={handleClose1} />
  </>);
};

export default InfiniteSpace;
