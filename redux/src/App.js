import React, {useState} from 'react'
import { increment , decrement, incrementByValue } from "./feature/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [input, setInput] = useState('')
  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <input type="number" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button> Increment By Value</button>
        <button> Increment</button>
        <button> Decrement</button>
      </div> 
    </div>
  )
}

export default App