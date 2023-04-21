import { useState } from 'react'
import './App.css'
import Card, {CardVariant} from './components/Card'

function App() {
  

  return (
    <div>
      <Card onClick={(num) => console.log("click", num)} variant={CardVariant.outlined} height={"200px"} width={"200px"}>
        <button>Click</button>
      </Card>
    </div>
  )
}

export default App
