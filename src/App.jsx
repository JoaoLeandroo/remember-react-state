import './App.css'
import { useState, useEffect } from "react"


function App() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  useEffect(() => {},[list])
  
  function handle() {
    if(input === '') {
      alert("informe um valor")
      return
    }
    setList([...list, input]);
    setInput('');
  }


  return(
    <div className='container'>
        <h3>List itens</h3>
        <input 
        type="text"
        placeholder='itens...'
        value={input}
        onChange={(e) => setInput(e.target.value)} />
        <button onClick={handle}>add</button>

        <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  )
}

export default App