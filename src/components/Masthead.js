import React, { useState, useEffect } from "react"
import "../styles/masthead.scss"

const Masthead = () => {
  
  const [text, setText] = useState("")
const [fullText, setFullText] = useState("Competitive Programmer | Web Developer | Content Writer")
const [index, setIndex] = useState(0)
useEffect(() => {
  if (index < fullText.length) {
    setTimeout(() => {
      setText(text + fullText[index])
      setIndex(index + 1)
    }, 40)
  }
}, [index])
  return (
    <div className="masthead">
        <span class="name"><h1>Harshita Lakhchaura</h1></span>
        <span class="subtitle">
          <p>{text}</p>
        </span>
        
    <div className="pp"><img src={require("../assets/pp.jpg")} alt="logo" height="500px" style={{borderRadius:"20%"}}></img></div>
    <p className="resume"><a href={require("../assets/Harshita_Resume.pdf")} download="Harshita_Resume"><h1>Download Resume</h1></a></p>
    </div>
  )
}

export default Masthead