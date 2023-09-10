const fs = require('fs')

const XMLFlightData = fs.readFileSync('flighdata_A.xml')

console.log(XMLFlightData)