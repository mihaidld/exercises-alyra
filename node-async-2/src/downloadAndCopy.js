/*
Ecrivez un programme qui télécharge une page d'un site internet puis la copie
dans un fichier. L'url du site ainsi que le nom du ficher où sera copié la page
téléchargée devront être passés en arguments de la ligne de commande.
*/

import axios from 'axios'
import fs from 'fs/promises'

//securite pour s'assurer que user rentre seulement 2 arguments dans ligne de commande
if (process.argv.length !== 4) {
    console.log(
        `Usage: node downloadAndCopy.js url file (e.g. node downloadAndCopy.js https://www.google.com ./index.html`
    )
    process.exit(1)
}

//securite pour s'assurer que user rentre url valide
if (!process.argv[2].includes('.') || !process.argv[2].startsWith('http')) {
    console.log(`Error: please enter a valid url (e.g. https://www.google.com)`)
    process.exit(1)
}

//securite pour s'assurer que user rentre fichier avec extension html valide
if (!process.argv[3].endsWith('.html')) {
    console.log(
        `Error: please enter a valid file with extension (e.g. ./index.html)`
    )
    process.exit(1)
}

try {
    let response = await axios.get(process.argv[2])
    await fs.writeFile(process.argv[3], response.data)
} catch (error) {
    console.error(error)
}
