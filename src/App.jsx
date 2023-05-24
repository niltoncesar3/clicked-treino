import { useState } from 'react'
import './App.css'


function App() {

  const [list, setList] = useState([]);
  const [undidList, setUndidList] = useState([]);

  const handleClick = (e) => {
    const firstPoint = {clientX : e.clientX, clientY : e.clientY}
    setList((prev) => [...prev, firstPoint])

  }

  const handleUndo = (e) => {
    e.stopPropagation()

    const undidPoint = list[list.length -1]
    
    setList((prev) => [...prev].slice(0, -1))

    setUndidList((prev) => [...prev, undidPoint])
  }

  const handleRedo = (e) => {
    e.stopPropagation();

    const lastPoint = undidList[undidList.length -1]

    setUndidList((prev) => [...prev].slice(0,-1))

    setList((prev) => [...prev, lastPoint])
  }



 
  return (
    <div onClick={handleClick} className='page'>
      <button onClick={handleUndo} disabled= {list.length === 0}>Undo</button>
      <button onClick={handleRedo} disabled = {undidList.length === 0}>Redo</button>
      {list.map((item) => (
        <span className='dot' style={{left: item.clientX, top: item.clientY}}></span>
      ))}
    </div>
  )
}

export default App
