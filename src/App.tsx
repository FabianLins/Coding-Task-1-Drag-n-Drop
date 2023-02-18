import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const redSquare = useRef()
  const blueSquare = useRef()
  const elements = useRef()
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
    const parentLeft = elements.current.offsetLeft
    const parentTop = elements.current.offsetTop

    if (currColor == "red" && xPos >= redSquare.current.offsetLeft + parentLeft && xPos <= redSquare.current.offsetLeft + squareWidth + parentLeft) {
      if (yPos >= redSquare.current.offsetTop + parentTop && yPos <= redSquare.current.offsetTop + squareWidth + parentTop) {
        event.currentTarget.classList.add("set")
        event.currentTarget.style.left = `${squareWidth / 2 + redSquare.current.offsetLeft}px`
      }
    }
    else if (currColor == "blue" && xPos >= blueSquare.current.offsetLeft + parentLeft && xPos <= blueSquare.current.offsetLeft + squareWidth + parentLeft) {
      if (yPos >= blueSquare.current.offsetTop + parentTop && yPos <= blueSquare.current.offsetTop + squareWidth + parentTop) {
        event.currentTarget.classList.add("set")
        event.currentTarget.style.left = `${squareWidth / 2 + blueSquare.current.offsetLeft}px`
      }
    }
  }

  return (
    <div className="content">
      <div className="elements" ref={elements}>
        <div className="red square red square" ref={redSquare}></div>
        <div className="blue square" ref={blueSquare}></div>
        <div className="red circle" draggable="true" onMouseDown={shapeColor} onDragEnd={dragItem}></div>
        <div className="blue circle" draggable="true" onMouseDown={shapeColor} onDragEnd={dragItem}></div>
      </div>
    </div >
  )
}

export default App
