import { readFileSync } from 'fs'
import { parseString } from 'xml2js'
import express from 'express'
import cors from 'cors'

let flightDataJSON = null
const XMLFlightData = readFileSync('flighdata_A.xml')
parseString(XMLFlightData, {
        mergeAttrs: true, 
        explicitRoot: false,
        explicitArray: false
    }, (err, result) => {
    if (err) {
        throw err
    }
    flightDataJSON = result
})

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.json(flightDataJSON)
})

app.listen(9000,  function () {
    console.log(`App running on port ${this.address().port}`)
})