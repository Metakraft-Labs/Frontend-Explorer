import React,{useEffect,useState} from 'react'
import Picture12 from '../Assets/Picture12.png'
import '../Style/header.css'
import {useNavigate} from 'react-router-dom';
import { init, useConnectWallet } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import { ethers } from 'ethers'
const apiKey = '84fd53f3-0027-4e28-9ac8-0baf47343490'

const injected = injectedModule()

const infuraKey = '<INFURA_KEY>'
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

// initialize Onboard
init({
  apiKey,
  wallets: [injected],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl
    }
  ]
})


function Header() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  let ethersProvider

  if (wallet) {
    // if using ethers v6 this is:
    // ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
    ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
  }
  const [defaultAccount,setDefaultAccount]=useState(null)
  const connectWalletHandler=()=>{
    if(window.ethereum){
      window.ethereum.request({method:'eth_requestAccounts'})
      .then(result=>{
        accountChangedHandler(result[0]);
      })
    }
    else {
      console.log("No ethereum account")
    }
  }
  const accountChangedHandler=(newAccount)=>{
    setDefaultAccount(newAccount)
    console.log(defaultAccount)
  }

  const navigate=useNavigate()
  const [panel,setPanel]=useState(['none','none','none','none','none'])
 const showSpeed =(event,slug)=>{
  event.preventDefault();
  navigate(`/${slug}`)
 }
 useEffect(()=>{
  function mains(){
  let buttonList=document.getElementsByClassName('navButton')
  for(let i=0;i<buttonList.length;++i){
    let set=['none','none','none','none','none']
    buttonList[i].addEventListener('mouseenter',function(event){
      event.target.style.color='#88b2db'
      event.target.style.borderRadius='0.7vw'
      event.target.style.backgroundColor='#1B1B1B'
      set[i]='block'
      setPanel(set)
    })
    buttonList[i].addEventListener('mouseleave',function(event){
      event.target.style.color='#a390a4'
      event.target.style.borderRadius='0'
      event.target.style.backgroundColor='transparent'
      setPanel(['none','none','none','none','none'])
    })
  }}
  mains()
 },[])
//  function turbo(event){
//   let alp=event.target
//   const sv=alp.style.borderColor
//   alp.style.border="4px solid #01C5BA"
//   setTimeout(()=>{
//     alp.style.border=sv
//   },300)
//  }
  return (
    <>
    <div  className="navBar"  style={{position:"fixed",zIndex:"4",top:"0",left:"0",right:"0",backgroundColor:"rgba(8,8,8,0.7)",borderBottom:"1px solid #1e262e",paddingLeft:"2vw",paddingRight:'2vw',height:"3.8vw"}}>
    <div style={{position:'absolute',top:"5vw",left:"26vw",backgroundColor:"#1b1b1b",height:"30vw",width:"20vw",borderRadius:"0.7vw",display:`${panel[0]}`}}></div>
  <div style={{position:'absolute',top:"5vw",left:"32vw",backgroundColor:"#1b1b1b",height:"30vw",width:"20vw",borderRadius:"0.7vw",display:`${panel[1]}`}}></div>
  <div style={{position:'absolute',top:"5vw",left:"37vw",backgroundColor:"#1b1b1b",height:"30vw",width:"20vw",borderRadius:"0.7vw",display:`${panel[2]}`}}></div>
  <div style={{position:'absolute',top:"5vw",left:"43vw",backgroundColor:"#1b1b1b",height:"30vw",width:"20vw",borderRadius:"0.7vw",display:`${panel[3]}`}}></div>
  <div style={{position:'absolute',top:"5vw",left:"47vw",backgroundColor:"#1b1b1b",height:"30vw",width:"20vw",borderRadius:"0.7vw",display:`${panel[4]}`}}></div>
    <div className="navi" style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-evenly"}}> 
      <img style={{marginTop:"0.5vw",height:"2.5vw"}}src={Picture12} alt="not found" />
      <div style={{display:"flex",paddingLeft:"9%",fontSize:"0.9vw"}}>
          <div  className="navButton"  href="#" style={{cursor:'pointer',color:"#C4C4C4"}}>Discover</div>
          <div  className="navButton" onClick={(event)=>{showSpeed(event,"")}} href="#" style={{cursor:'pointer',color:"#C4C4C4"}}>Home</div>
          <div className='navButton' onClick={(event)=>{showSpeed(event,"about")}} href="#" style={{cursor:'pointer',color:"#C4C4C4"}}>About Us</div>
          <div className='navButton'  href="#" style={{cursor:'pointer',color:"#C4C4C4"}}>Blog</div>
          <div className='navButton' onClick={(event)=>{showSpeed(event,"contact")}} href="#" style={{cursor:'pointer',color:"#C4C4C4"}}>Contact Us</div>
          <div  href="#" style={{cursor:'pointer',color:"white",marginTop:"1vw",padding:"0.2vw 1vw",fontSize:"1vw",fontWeight:"650"}} className="hire">We are hiring!</div>
      </div>
    <div style={{color:"white",display:"flex",flexDirection:"row",gap:"0.5vw",marginTop:"0.5vw"}} className="rightHeader">
<button className="btn btn-outline-light" style={{height:"2.5vw",border:"0.125vw solid #01C5BA",borderRadius:"0.2vw",padding:"0 4vw",fontSize:"0.9vw",fontWeight:"500"}}>Talk to an expert</button>
<button disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())} className="btn btn-light" style={{height:"2.5vw",border:"0.125vw solid #01C5BA",borderRadius:"0.2vw",padding:"0 4vw",fontSize:"0.9vw",fontWeight:"500"}}>{connecting ? 'Connecting' : wallet ? 'Disconnect' : 'Connect'} Wallet</button>
      </div>
    </div>
  </div>

  </>
  )
}

export default Header
