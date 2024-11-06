import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
  const add=(()=>{
        count=count+1     
        if(count>=20){
          count=20;
        }
        setCount(count)
  })

  const remove=(()=>{
    count=count-1;
    if(count=== -1){
      count=0;
    }
    setCount(count)
  })

  return (
    <>
       <h1>  Counter:{count} </h1>
       <button onClick={add}>add +</button>
       <button onClick={remove}>remove -</button>
    </>
  )
}

export default App
