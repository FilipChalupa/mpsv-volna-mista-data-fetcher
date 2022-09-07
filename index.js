import fs from 'fs/promises'
import data from './volna-mista.json' assert { type: 'json' }

const output = data.polozky.slice(0, 10)

fs.writeFile('output.json', JSON.stringify(output, null, 2))
