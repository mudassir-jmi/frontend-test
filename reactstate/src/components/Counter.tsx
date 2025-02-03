import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState<number>(0)

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className="App">
      <h1>React Counter</h1>
      <div className="card">
        <p data-testid="counter-display">Count: {count}</p>
        <div className="button-group">
          <button
            onClick={handleDecrement}
            className="button"
          >
            -
          </button>
          <button
            onClick={handleIncrement}
            className="button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter;