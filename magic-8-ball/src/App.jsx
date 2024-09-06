import React,{ useState } from 'react'
import EightBall from './EightBall'
import answers from './answers'
import './App.css'

function App() {
  
  return (
    <>
      <div className="game">
        <div className="game-title">
        <h1>Magic Eightball game!</h1>
        </div>
       
        <EightBall answers={answers}/>
      </div>
    </>
  )
}

export default App
