import express from 'express'

/*
Créer une programme app.js qui utilise express. Cette application devra tourner
sur localhost et le port 7777. Avec votre navigateur en se connectant sur
http://localhost:7777 on devra récupérer le message 'Exercices express partie 1'
Pour cela il faudra créer une route qui manage le path /
*/

const app = express()
export const PORT = 7777

app.get('/', (req, res) => {
    res.send('Exercices express partie 1')
})

/*
Ajouter une route /aboutme qui retournera à l'utilisateur des informations à
propos de vous
*/
app.get('/aboutme', (req, res) => {
    res.send(
        `Je suis un eleve de l'ecole Alyra interesse par le developpement back-end`
    )
})

/*
Ajouter une route /aboutyou qui retournera à l'utilisateur des informations le
concernant comme: 
son ip
son user agent, c'est la version de son navigateur.
Cette information peut être extraite depuis la propriété headers de la requête
de l'utilisateur
*/
app.get('/aboutyou', (req, res) => {
    res.send(
        `Bonjour, merci pour votre visite, j'ai appris que votre ip c'est ${req.ip} et la version de votre navigateur est: ${req.headers['user-agent']}`
    )
})

/*
Ajouter une route /vote qui contient 1 paramètre qui correspondera à l'age. En
fonction de l'age passé en paramètre on retournera les messages suivants dans le
navigateur:
si age < 18, par example http://localhost:7777/age/17, on devra retourner 'trop jeune pour voter' 
si age >= 18, par example http://localhost:7777/age/19, on devra retrouver 'Vous pouvez voter'
*/
app.get('/vote/:age', (req, res) => {
    let age = Number(req.params.age)
    let message = ''
    //securite pour s'assurer que user rentre un age nombre entier positif
    if (!isFinite(age) || Math.floor(age) != age || age < 0) {
        res.send(
            'Veuillez rentrer votre age avec un nombre entier positif (ex. 18)'
        )
    } else {
        message =
            age < 18 ? 'vous etes trop jeune pour voter' : 'vous pouvez voter'
        res.send(`Puisque vous avez ${age} ans ${message}`)
    }
})

/*
Ajouter une route /palindrome qui prendra un mot en paramètre. Un message devra être retourné à l'utilisateur si le mot est un palindrome.
*/
app.get('/palindrome/:word', (req, res) => {
    let word = req.params.word
    if (word === word.split('').reverse().join('')) {
        res.send(`${word} is a palindrome`)
    } else {
        res.send(`${word} is not a palindrome`)
    }
})

/*
Ajouter une route /oddtest qui prendra un nombre en paramètre. Un message devra
être retourné pour indiquer que le nombre passé en paramètre est pair ou impair
si le nombre est pair, par example http://localhost:7777/oddtest/2, on devra retourner 'pair' 
si le nombre est impair, par example http://localhost:7777/oddtest/19, on devra retrouver 'impair'
*/
app.get('/oddtest/:number', (req, res) => {
    let number = Number(req.params.number)
    //securite pour s'assurer que user rentre un nombre entier
    if (!isFinite(number) || Math.floor(number) != number) {
        res.send('Veuillez rentrer un nombre entier (ex. 18)')
    } else {
        let message =
            number % 2 === 0 ? `${number} est pair` : `${number} est impair`
        res.send(message)
    }
})

export let arrayOfPaths = app._router.stack // all registered routes
    .filter((r) => r.route) // take out all the middleware
    .map((r) => r.route.path) //map the paths

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})
