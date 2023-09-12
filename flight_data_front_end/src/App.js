import './App.css'
import { useEffect, useState } from 'react'

export default function App() {
  const [flights, setFlights] = useState([])

  useEffect(() => {
    fetch('http://localhost:9000/flights')
    .then(response => response.json())
    .then(data => setFlights(data.flight))
  }, [])

  return (
    <div className="App">
      <h1>Flight Data Stats</h1>
      <div>
        <h2>Number of Flights Departing in the Morning</h2>
      </div>
      <div>
        <h2>Proportion of Flights to Sweden</h2>
      </div>
      <div>
        <h2>10 Most Popular Destination Airports</h2>
      </div>
      <div>
        <h2>Average Journey Time between London Heathrow and Dubai</h2>
      </div>
    </div>
  )
}


