/*
Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt en
utilisant les api asynchrones basées sur des promises du module fs de node.js.
*/
import fs from 'fs/promises'

console.log('START OF PROGRAM')

/* try {
    let stats = await fs.stat('./file1.txt')
    if (stats.isFile()) {
        await fs.copyFile('./file1.txt', './file2.txt')
        console.log(
            'file1.txt was copied to file2.txt asynchronously with a promise'
        )
    }
} catch (e) {
    console.error(e)
} */

try {
    let stats = await fs.stat('./file1.txt')
    if (stats.isFile()) {
        let content = await fs.readFile('./file1.txt', 'utf-8')
        await fs.writeFile('./file2.txt', content)
        console.log(
            'file1.txt was copied to file2.txt asynchronously with a promise'
        )
    }
} catch (error) {
    console.error(error)
}

console.log('END OF PROGRAM')
