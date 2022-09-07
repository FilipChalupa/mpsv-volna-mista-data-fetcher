import fs from 'fs/promises'
import data from './volna-mista.json' assert { type: 'json' }

const casPredDnem = new Date()
casPredDnem.setDate(casPredDnem.getDate() - 1)

const output = data.polozky.filter((polozka) => {
	if (
		//polozka.datumVlozeni > casPredDnem.toISOString() &&
		polozka.profeseCzIsco.id === 'CzIsco/83221' &&
		polozka.zamestnavatel?.nazev.toLowerCase().includes('pizz') !== true &&
		polozka.upresnujiciInformace?.cs.toLowerCase().includes('pizz') !== true
	) {
		return true
	}
})

console.log('Počet:', output.length)

fs.writeFile('output.json', JSON.stringify(output, null, 2))
