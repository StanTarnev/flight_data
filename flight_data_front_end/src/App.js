import './App.css'
import { useEffect, useState } from 'react'

export default function App() {
  const [flights, setFlights] = useState([])

  useEffect(() => {
    fetch('http://localhost:9000/flights')
    .then(response => response.json())
    .then(data => setFlights(data.flight))
  }, [])

  function countMorningFlights() {
    return flights.filter(flight => flight['outdeparttime'] < '12').length
  }

  function getSwedenDestinationRatio() {
    const swedenIATAAirportCodes = ['AGH', 'AJR', 'ARN', 'BLE', 'BMA', 'EKT', 'EVG', 'GEV', 'GOT', 'GSE', 'GVX', 'HAD', 'HFS', 'HLF', 'HMV', 'HUV', 'IDB', 'JKG', 'KID', 'KLR', 'KRF', 'KRN', 'KSD', 'KSK', 'KVB', 'LDK', 'LLA', 'LPI', 'LYC', 'MMX', 'MXX', 'NRK', 'NYO', 'OER', 'ORB', 'OSD', 'OSK', 'PJA', 'RNB', 'SCR', 'SDL', 'SFT', 'SOO', 'SQO', 'THN', 'TYF', 'UME', 'VBY', 'VHM', 'VST', 'VVK', 'VXO']

    const swedenDestinationRatio = flights.filter(flight => swedenIATAAirportCodes.includes(flight['destair'])).length / flights.length * 100
    return `${swedenDestinationRatio.toFixed(2)}%`
  }

  function getTop10Airports() {
    const destinationFrequencies = []
    for (const flight of flights) {
        if (destinationFrequencies.length === 0) {
            destinationFrequencies.push({
                    "airportCode": flight["destair"],
                    "count": 1
            })
        } else {
            let existingAirportCode = false
            for (const item of destinationFrequencies) {
                if (item["airportCode"] === flight["destair"]) {
                    item["count"]++
                    existingAirportCode = true
                    break
                }
            }
            if (!existingAirportCode) {
                destinationFrequencies.push({
                    "airportCode": flight["destair"],
                    "count": 1
                })
            }
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    }
    return destinationFrequencies.sort((a, b) => b["count"] - a["count"]).slice(0, 10)
  }

  return (
    <div className="App">
      <h1>Flight Data Stats</h1>
      <div>
        <h2>Number of Flights Departing in the Morning</h2>
        <h3>{ countMorningFlights() }</h3>
      </div>
      <div>
        <h2>Proportion of Flights to Sweden</h2>
        <h3>{ getSwedenDestinationRatio() }</h3>
      </div>
      <div>
        <h2>IATA Codes for the 10 Most Popular Destination Airports</h2>
        <ul>
          {getTop10Airports().map((airport, index) => <li key={index}>{ airport.airportCode } - { airport.count } flights</li>)}
        </ul>
      </div>
      <div>
        <h2>Average Journey Time between London Heathrow and Dubai</h2>
      </div>
    </div>
  )
}


