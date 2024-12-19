import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react'

function App() {

  const [speed, setSpeed] = useState(1)
  const [fontSize, setFontSize] = useState(16)
  const [running, setRunning] = useState(false)
  const [mirror, setMirror] = useState(false)
  const containerRef = useRef()

  useEffect(() => {
    if (running) {
      const id = setInterval(() => {
        const el = containerRef.current
        el.scroll(0, el.scrollTop + speed)
      }, 50)
      return () => clearInterval(id)
    }
  }, [running, speed])

  return (
    <div className="App">
      <div className="header">
        <button onClick={() => setRunning(!running)}>
          {running ? '開始' : '停止'}
        </button>
        <button onClick={() => setMirror(!mirror)}>
          上下鏡像
        </button>
        字體大小：
        <input
          value={fontSize}
          onChange={e => setFontSize(Number(e.target.value))}
          type='range'
          min='10'
          max='200'
        ></input>
        速度：
        <input
          value={speed}
          onChange={e => setSpeed(Number(e.target.value))}
          type='range'
          min='0'
          max='50'
        ></input>
      </div>
      <div className='container' ref={containerRef} style={{ transform: `scaleY(${mirror ? '-1' : '1'})` }}>
        <div className='padding-top'></div>
        <textarea style={{ fontSize }}>
        </textarea>
      </div>
    </div>
  );
}

export default App;
