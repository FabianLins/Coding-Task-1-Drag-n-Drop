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

  const shapeColor = (event: React.MouseEvent) => {
    if (elements.current) {
      //console.log(event.target.classList)
      (event.target as Element).classList.forEach((element: string) => {
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
      const squareWidth: number = (redSquare.current as HTMLElement).offsetWidth
      const parentLeft: number = (elements.current as HTMLElement).offsetLeft
      const parentTop: number = (elements.current as HTMLElement).offsetTop - (content.current as HTMLElement).offsetTop
      console.log(`xPos: ${xPos} >= (redSquare.current.offsetLeft + parentLeft): ${(redSquare.current as HTMLElement).offsetLeft + parentLeft} && xPos: ${xPos} <= (redSquare.current.offsetLeft + squareWidth + parentLeft): ${(redSquare.current as HTMLElement).offsetLeft + squareWidth + parentLeft}`)
      console.log(`yPos: ${yPos} >= redSquare.current.offsetTop + parentTop: ${(redSquare.current as HTMLElement).offsetTop + parentTop} && yPos <= redSquare.current.offsetTop + squareWidth + parentTop: ${(redSquare.current as HTMLElement).offsetTop + squareWidth + parentTop}`)
      if (currColor == "red" && xPos >= (redSquare.current as HTMLElement).offsetLeft + parentLeft && xPos <= (redSquare.current as HTMLElement).offsetLeft + squareWidth + parentLeft) {
        if (yPos >= (redSquare.current as HTMLElement).offsetTop + parentTop && yPos <= (redSquare.current as HTMLElement).offsetTop + squareWidth + parentTop) {
          event.currentTarget.classList.add("set")
          setRedCircle(true)
          event.currentTarget.style.left = `${squareWidth / 2 + (redSquare.current as HTMLElement).offsetLeft}px`
          if (isBlueCircleSet) {
            (blueCircle.current as HTMLElement).style.left = `${squareWidth / 2 + (blueCircle.current as HTMLElement).offsetLeft}px`
          }
        }
      }
      else if (currColor == "blue" && xPos >= (blueCircle.current as HTMLElement).offsetLeft + parentLeft && xPos <= (blueCircle.current as HTMLElement).offsetLeft + squareWidth + parentLeft) {
        if (yPos >= (blueCircle.current as HTMLElement).offsetTop + parentTop && yPos <= (blueCircle.current as HTMLElement).offsetTop + squareWidth + parentTop) {
          event.currentTarget.classList.add("set")
          setBlueCircle(true)
          event.currentTarget.style.left = `${squareWidth / 2 + (blueCircle.current as HTMLElement).offsetLeft}px`
          if (isRedCircleSet) {
            (redCircle.current as HTMLElement).style.left = `${squareWidth / 2 + (redSquare.current as HTMLElement).offsetLeft}px`
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