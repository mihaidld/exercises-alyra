/*
Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt en
utilisant les api asynchrones basées sur des callbacks du module fs de node.js.
*/
import fs from 'fs'

//envoie une erreur si fichier file2.txt existe deja, pour ne pas overwrite
const { COPYFILE_EXCL } = fs.constants

console.log('START OF PROGRAM')

fs.copyFile('./file1.txt', './file2.txt', COPYFILE_EXCL, (err) => {
    if (err) console.error(err)
    else
        console.log(
            'file1.txt was copied to file2.txt asynchronously with callback function'
        )
})

/* fs.readFile('./file1.txt', 'utf-8', (error, data) => {
    if (error) console.error(error)
    else
        fs.writeFile('./file2.txt', data, (error) => {
            if (error) console.error(error)
            else
                console.log(
                    'file1.txt was copied to file2.txt asynchronously with callback function'
                )
        })
}) */

console.log('END OF PROGRAM')
