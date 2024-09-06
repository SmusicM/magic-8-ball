import React,{ useState } from 'react'
import './EightBall.css'
const EightBall = ({answers})=>{
 const [message,setMessage] = useState("Think of a Question")
 const [color,setColor]= useState("black")
 const getAnswer = () =>{
    const randIdx = Math.floor(Math.random() * answers.length);
    const randAnswer = answers[randIdx];
    setMessage(randAnswer.msg)
    setColor(randAnswer.color)
 };
 const restartGame = () =>{
    setMessage("Think of a Question")
    setColor("black")
 }
 return(
    <div className='EightBall-cont'>
     
    <div className = "EightBall" style={{backgroundColor: color}}
    onClick={getAnswer}>

        <div className = "EightBall-message">{message}</div>
       
    </div>
    <button className="EightBall-button" onClick={restartGame}>Restart</button>

    </div>
 )
}

export default EightBall 