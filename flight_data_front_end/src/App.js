import './App.css'
import { useEffect, useState } from 'react'

export default function App() {
  const [flights, setFlights] = useState([])

  useEffect(() => {
    fetch('http://localhost:9000/flights')
    .then(response => response.json())
    .then(data => setFlights(data.flight))
  })

  return (
    <div className="App">
      <h1>From App Component</h1>
    </div>
  )
}


