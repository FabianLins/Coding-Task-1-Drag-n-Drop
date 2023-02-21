import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const redSquare = useRef()
  const blueSquare = useRef()
  const redCircle = useRef()
  const blueCircle = useRef()
  const elements = useRef()
  const content = useRef()
  const [offSetX, setOffsetX] = useState(0)
  const [offSetY, setOffsetY] = useState(0)
  const [isRedCircleSet, setRedCircle] = useState(false)
  const [isBlueCircleSet, setBlueCircle] = useState(false)
  const [currColor, setCurrColor] = useState("")

  const shapeColor = (event: any) => {
    //console.log(event.target.classList)
    event.target.classList.forEach(element => {
      if (element == "red") {
        setCurrColor("red")
      }
      else if (element == "blue") {
        setCurrColor("blue")
      }
    })
    const xPosMouse = event.clientX
    const yPosMouse = event.clientY
    const shapeOffsetX = event.target.offsetLeft
    const shapeOffsetY = event.target.offsetTop
    const xOffset = xPosMouse - shapeOffsetX - elements.current.offsetLeft
    const yOffset = yPosMouse - shapeOffsetY - elements.current.offsetTop
    setOffsetX(xOffset)
    setOffsetY(yOffset)
  }

  const dragItem = (event: any) => {
    //clientX give the mouse position but it is heavily variable since it depends on the exact position you drag the circle
    const xPos = event.clientX - offSetX * 2
    const yPos = event.clientY - offSetY * 2
    const squareWidth = redSquare.current.offsetWidth
    const parentLeft = elements.current.offsetLeft
    const parentTop = elements.current.offsetTop - content.current.offsetTop
    console.log(`xPos: ${xPos} >= (redSquare.current.offsetLeft + parentLeft): ${redSquare.current.offsetLeft + parentLeft} && xPos: ${xPos} <= (redSquare.current.offsetLeft + squareWidth + parentLeft): ${redSquare.current.offsetLeft + squareWidth + parentLeft}`)
    console.log(`yPos: ${yPos} >= redSquare.current.offsetTop + parentTop: ${redSquare.current.offsetTop + parentTop} && yPos <= redSquare.current.offsetTop + squareWidth + parentTop: ${redSquare.current.offsetTop + squareWidth + parentTop}`)
    if (currColor == "red" && xPos >= redSquare.current.offsetLeft + parentLeft && xPos <= redSquare.current.offsetLeft + squareWidth + parentLeft) {
      //alert(`yPos: ${yPos} >= redSquare.current.offsetTop + parentTop: ${redSquare.current.offsetTop + parentTop} && yPos <= redSquare.current.offsetTop + squareWidth + parentTop: ${redSquare.current.offsetTop + squareWidth + parentTop}`)
      if (yPos >= redSquare.current.offsetTop + parentTop && yPos <= redSquare.current.offsetTop + squareWidth + parentTop) {
        event.currentTarget.classList.add("set")
        setRedCircle(true)
        event.currentTarget.style.left = `${squareWidth / 2 + redSquare.current.offsetLeft}px`
        if (isBlueCircleSet) {
          blueCircle.current.style.left = `${squareWidth / 2 + blueSquare.current.offsetLeft}px`
        }
      }
    }
    else if (currColor == "blue" && xPos >= blueSquare.current.offsetLeft + parentLeft && xPos <= blueSquare.current.offsetLeft + squareWidth + parentLeft) {
      if (yPos >= blueSquare.current.offsetTop + parentTop && yPos <= blueSquare.current.offsetTop + squareWidth + parentTop) {
        event.currentTarget.classList.add("set")
        setBlueCircle(true)
        event.currentTarget.style.left = `${squareWidth / 2 + blueSquare.current.offsetLeft}px`
        if (isRedCircleSet) {
          redCircle.current.style.left = `${squareWidth / 2 + redSquare.current.offsetLeft}px`
        }
      }
    }
  }

  return (
    <div className="content" ref={content}>
      <div className="elements" ref={elements}>
        <div className="red square red square" ref={redSquare}></div>
        <div className="red circle" ref={redCircle} draggable="true" onMouseDown={shapeColor} onDragEnd={dragItem}></div>
        <div className="blue square" ref={blueSquare}></div>
        <div className="blue circle" ref={blueCircle} draggable="true" onMouseDown={shapeColor} onDragEnd={dragItem}></div>
      </div>
    </div >
  )
}

export default App 