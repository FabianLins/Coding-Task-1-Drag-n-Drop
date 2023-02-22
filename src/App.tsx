import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const redSquare = useRef<HTMLDivElement>(null)
  const blueSquare = useRef<HTMLDivElement>(null)
  const redCircle = useRef<HTMLDivElement>(null)
  const blueCircle = useRef<HTMLDivElement>(null)
  const elements = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const [offSetX, setOffsetX] = useState(0)
  const [offSetY, setOffsetY] = useState(0)
  const [isRedCircleSet, setRedCircle] = useState(false)
  const [isBlueCircleSet, setBlueCircle] = useState(false)
  const [currColor, setCurrColor] = useState("")

  const shapeColor = (event: React.MouseEvent) => {
    if (elements.current && event.target) {
      //console.log(event.target.classList)
      (event.target as HTMLElement).classList.forEach((element: string) => {
        if (element === "red") {
          setCurrColor("red")
        }
        else if (element === "blue") {
          setCurrColor("blue")
        }
      })
      const xPosMouse: number = event.clientX
      const yPosMouse: number = event.clientY
      const shapeOffsetX: number = (event.target as HTMLElement).offsetLeft
      const shapeOffsetY: number = (event.target as HTMLElement).offsetTop
      const currElement: HTMLElement = elements.current
      const xOffset: number = xPosMouse - shapeOffsetX - currElement.offsetLeft
      const yOffset: number = yPosMouse - shapeOffsetY - currElement.offsetTop
      setOffsetX(xOffset)
      setOffsetY(yOffset)
    }
  }

  const dragItem = (event: any) => {
    if (redSquare.current && elements.current && content.current && blueCircle.current && redCircle.current) {
      const xPos: number = event.clientX - offSetX * 2
      const yPos: number = event.clientY - offSetY * 2
      const squareWidth: number = redSquare.current.offsetWidth
      const parentLeft: number = elements.current.offsetLeft
      const parentTop: number = elements.current.offsetTop - (content.current as HTMLElement).offsetTop
      console.log(`xPos: ${xPos} >= (redSquare.current.offsetLeft + parentLeft): ${redSquare.current.offsetLeft + parentLeft} && xPos: ${xPos} <= (redSquare.current.offsetLeft + squareWidth + parentLeft): ${redSquare.current.offsetLeft + squareWidth + parentLeft}`)
      console.log(`yPos: ${yPos} >= redSquare.current.offsetTop + parentTop: ${redSquare.current.offsetTop + parentTop} && yPos <= redSquare.current.offsetTop + squareWidth + parentTop: ${redSquare.current.offsetTop + squareWidth + parentTop}`)
      if (currColor == "red" && xPos >= redSquare.current.offsetLeft + parentLeft && xPos <= redSquare.current.offsetLeft + squareWidth + parentLeft) {
        if (yPos >= redSquare.current.offsetTop + parentTop && yPos <= redSquare.current.offsetTop + squareWidth + parentTop) {
          event.currentTarget.classList.add("set")
          setRedCircle(true)
          event.currentTarget.style.left = `${squareWidth / 2 + redSquare.current.offsetLeft}px`
          if (isBlueCircleSet) {
            blueCircle.current.style.left = `${squareWidth / 2 + blueCircle.current.offsetLeft}px`
          }
        }
      }
      else if (currColor == "blue" && xPos >= blueCircle.current.offsetLeft + parentLeft && xPos <= blueCircle.current.offsetLeft + squareWidth + parentLeft) {
        if (yPos >= blueCircle.current.offsetTop + parentTop && yPos <= blueCircle.current.offsetTop + squareWidth + parentTop) {
          event.currentTarget.classList.add("set")
          setBlueCircle(true)
          event.currentTarget.style.left = `${squareWidth / 2 + blueCircle.current.offsetLeft}px`
          if (isRedCircleSet) {
            redCircle.current.style.left = `${squareWidth / 2 + redSquare.current.offsetLeft}px`
          }
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