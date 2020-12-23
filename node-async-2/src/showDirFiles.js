/*
Ecrire un programme qui affiche le contenu de tous les fichiers d'un repertoire.
Le repertoire devra être passé en argument de la ligne de commande. Parcourir la
documentation de l'api fs de node.js afin de decouvrir une fonction asynchrone
qui puisse vous lister tous les fichiers contenus dans un repertoire.
*/

import fs from 'fs/promises'

//securite pour s'assurer que user rentre seulement 1 argument dans ligne de commande
if (process.argv.length !== 3) {
    console.log(
        `Usage: node showDirFiles directory (e.g. node showDirFiles ./directoryName)`
    )
    process.exit(1)
}

try {
    let stats = await fs.stat(process.argv[2])
    if (stats.isDirectory()) {
        let array = await fs.readdir(process.argv[2])
        //console.log(array)
        for (let file of array) {
            let stats = await fs.stat(`${process.argv[2]}/${file}`)
            if (stats.isFile()) {
                let content = await fs.readFile(
                    `${process.argv[2]}/${file}`,
                    'utf-8'
                )
                console.log(`${file} : ${content}`)
            } else {
                console.log(`${file} is a directory`)
            }
        }
    }
} catch (error) {
    console.error(error)
}
