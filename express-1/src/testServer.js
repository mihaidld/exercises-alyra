/*
Ecrivez un script testServer.js qui se connectera aux différentes url de votre
serveur et qui affichera dans la console les messages récupérés. testServer.js
utilisera le package axios pour éffectuer les requêtes HTTP sur votre serveur
express
*/
import axios from 'axios'
import { PORT, arrayOfPaths } from './app.js'

let rootUrl = `http://localhost:${PORT}`
console.log(arrayOfPaths)
for (let path of arrayOfPaths) {
    // rajouter detection de nombres et lettres pour remplacer variables age,
    // word et number par examples concrets
    if (path.includes(':')) {
        let index = path.indexOf(':')
        path =
            path.slice(0, index) +
            (path.slice(index + 1) === 'word'
                ? ['tenet', 'string'][Math.floor(Math.random() * 2)]
                : Math.floor(Math.random() * 120))
    }
    axios
        .get(rootUrl + path)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => console.error(error))
}
