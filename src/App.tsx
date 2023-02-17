import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const redSquare = useRef()
  const blueSquare = useRef()
  const [currColor, setCurrColor] = useState("")

  const shapeColor = (event: any) => {
    console.log(event.target.classList)
    event.target.classList.forEach(element => {
      if (element == "red") {
        setCurrColor("red")
      }
      else if (element == "blue") {
        setCurrColor("blue")
      }
    })
  }

  const dragItem = (event: any) => {
    const xPos = event.clientX
    const yPos = event.clientY
    const squareWidth = redSquare.current.offsetWidth
    if (currColor == "red" && xPos >= redSquare.current.offsetLeft && xPos <= redSquare.current.offsetLeft + squareWidth) {
      if (yPos >= redSquare.current.offsetTop && yPos <= redSquare.current.offsetTop + squareWidth) {
        alert('success')
      }
    }
    else if (currColor == "blue" && xPos >= blueSquare.current.offsetLeft && xPos <= blueSquare.current.offsetLeft + squareWidth) {
      if (yPos >= blueSquare.current.offsetTop && yPos <= blueSquare.current.offsetTop + squareWidth) {
        alert('success')
      }
    }

    console.log(blueSquare)
    //if(xPos >= redSquare.width)
    //If div pos >= 2nd pos && div pos < (2nd pos + 2nd div width)
  }

  return (
    <div className="content">
      <div className="elements">
        <div className="red square red square" ref={redSquare}></div>
        <div className="blue square" ref={blueSquare}></div>
        <div className="red circle" draggable="true" onMouseDown={shapeColor} onDragEnd={dragItem}></div>
        <div className="blue circle" draggable="true" onMouseDown={shapeColor} onDragEnd={dragItem}></div>
      </div>
    </div >
  )
}

export default App
