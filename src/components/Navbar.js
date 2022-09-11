import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ComputerIcon from '@material-ui/icons/Computer';
import ContactsIcon from '@material-ui/icons/Contacts';
import gsap from "gsap"
import ReactTooltip from 'react-tooltip';
import { Tooltip } from '@material-ui/core';
import "../styles/navbar.scss"

export default function Navbar() {
  function move(id, position, color) {
    var tl = gsap.timeline();
    tl.to("#bgBubble", {duration: 0.15, bottom: "-30px", ease: "ease-out"}, 0)
      .to("#bubble1", {duration: 0.01, y: "0%", boxShadow: 'none', ease: "ease-out", opacity:0.7,border:"6px solid gold",}, 0)
      .to("#bubble2", {duration: 0.01, y: "0%", boxShadow: 'none', ease: "ease-out",opacity:0.7,border:"6px solid gold",}, 0)
      .to("#bubble3", {duration: 0.01, y: "0%", boxShadow: 'none', ease: "ease-out",opacity:0.7,border:"6px solid gold",}, 0)
      .to("#bubble4", {duration: 0.01, y: "0%", boxShadow: 'none', ease: "ease-out",opacity:0.7,border:"6px solid gold",}, 0)
      .to(".icon", {duration: 0.05, opacity: 1, ease: "ease-out",}, 0)
      .to("#bgBubble", {duration: 0.01, left: position, ease: "ease-in-out"}, 0.1)
      .to(`#bubble${id}`, { border:"6px solid black",duration: 0.05, y: "0%", opacity: 1.4, ease: "ease-out"},  '-=0.1')
      .to(`#bubble${id}> span`, {duration: 0.05,  y: "0%", opacity: 1.4, ease: "ease-out"}, '-=0.1')
  }

  return (<>
    <div className="logo"><img src={require("../assets/logo.png")} alt="logo" height="80px"></img></div>
    <div className="navcontainer" id="navbarContainer">        
      <div className="navbar">
      <div className="bubbleWrapper">
      <div id="bubble1" class="bubble" onClick={()=>move('1', '50px', '#fff00')}><Tooltip title="Home"><span class="icon"><HomeIcon/></span></Tooltip></div>
      <div id="bubble2" class="bubble" onClick={()=>move('2', '50px', '#00fff')}><Tooltip title="About"><span class="icon"><InfoIcon/></span></Tooltip></div>
      <div id="bubble3" class="bubble" onClick={()=>move('3', '50px', '#00fff')}><Tooltip title="Projects"><span class="icon"><ComputerIcon/></span></Tooltip></div>
      <div id="bubble4" class="bubble" onClick={()=>move('4', '50px', '#00fff')}><Tooltip title="Contact"><span class="icon"><ContactsIcon/></span></Tooltip></div>
    </div>
    </div> 
  </div>
  <div className='navbarContain'></div>
  </>
  )
}
