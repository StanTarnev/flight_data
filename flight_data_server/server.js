import { readFileSync } from 'fs'
import { parseString } from 'xml2js'

const XMLFlightData = readFileSync('flighdata_A.xml')

let flighDataJSON = null

parseString(XMLFlightData, { mergeAttrs: true }, (err, result) => {
    if (err) {
        throw err
    }

    flighDataJSON = JSON.stringify(result)
})

console.log(flighDataJSON)