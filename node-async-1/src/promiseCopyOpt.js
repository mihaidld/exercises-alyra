/*
Réecrivez le programme promiseCopy.js afin qu'il puisse accepter 2 arguments de
la ligne de commande: 
un fichier source, qui est le fichier à copier 
un fichier dest, qui sera la destination de la copie 
Comme pour l'exercice précedent
utiliser les api asynchrones basées sur des promises du module fs de node.js.
*/
import fs from 'fs/promises'

console.log('START OF PROGRAM')

//securite pour s'assurer qu'on rentre exactement 2 arguments dans la ligne de commande
if (process.argv.length != 4) {
    console.log('Usage: node promiseCopyOpt.js file1.txt file2.txt')
    process.exit(1)
}

//securite pour s'assurer que les fichiers rentres comme arguments ont des extensions
if (!process.argv[2].includes('.') || !process.argv[3].includes('.')) {
    console.log(
        'Error: please enter files ending with .extension (ex. .txt, .js)'
    )
    process.exit(1)
}

//securite pour s'assurer que les fichiers rentres comme arguments ont la meme extension
if (
    process.argv[2].slice(process.argv[2].indexOf('.')) !==
    process.argv[3].slice(process.argv[3].indexOf('.'))
) {
    console.log(
        'Error: please enter 2 files ending with the same .extension (ex. .txt, .js)'
    )
    process.exit(1)
}

let fileSrc = process.argv[2]
let fileDest = process.argv[3]

try {
    let stats = await fs.stat(fileSrc)
    if (stats.isFile()) {
        //await fs.copyFile(fileSrc, fileDest)
        let content = await fs.readFile(fileSrc)
        await fs.writeFile(fileDest, content)
        console.log(
            'file1.txt was copied to file2.txt asynchronously with a promise and command line process.argv'
        )
    } else console.log(`Error: ${fileSrc} is not a file`)
} catch (e) {
    console.error(e)
}

console.log('END OF PROGRAM')
