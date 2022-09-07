import fs from 'fs/promises'
import data from './volna-mista.json' assert { type: 'json' }

const casPredDnem = new Date()
casPredDnem.setDate(casPredDnem.getDate() - 31)

const output = data.polozky.filter((polozka) => {
	if (polozka.datumVlozeni > casPredDnem.toISOString()) {
		return true
	}
})

// console.log('Počet:', output.length)

fs.writeFile('output.json', JSON.stringify(output, null, 2))
