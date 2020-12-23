import express from 'express'
import moment from 'moment'
import { calc } from './calc.js'

const app = express()
const IP_LOCAL = '172.24.223.209' // my local ip on my network
const PORT = 7777

/*
Créer une programme app.js qui utilise express. Cette application devra tourner
sur votre ip locale et le port 7777. Avec votre navigateur en se connectant sur
en http à votre ip locale sur le port 7777 on devra récupérer le message
'Exercices express partie 2' Pour cela il faudra créer une route qui manage le
path /
*/
const sendMessage = (req, res) => {
    let message = req.message ? req.message : ''
    res.send(message)
}

const wrappWithHtml = (req, res, next) => {
    let message = req.message ? req.message : ''
    req.message = `<!DOCTYPE html>

    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Exercices express 2</title>
      </head>
    
      <body>
        <p><b>${message}</b></p>
      </body>
    </html>`
    next()
}

app.get('/', (req, res, next) => {
    req.message = 'Exercices express partie 2'
    next()
})
/*
Ajouter une route /get_current_time qui retournera à l'utilisateur la date du
serveur sur lequel s'exécute app.js
*/

app.get('/get_current_time', (req, res, next) => {
    /* const date = new Date()
        req.message = date.toUTCString()
        next() */
    const dateNow = moment()
    dateNow.locale('fr')
    let dateFr = dateNow.format('dddd Do MMMM YYYY, HH:mm:ss:SSS')
    req.message = `La date du serveur est ${dateFr}`
    next()
})
/*
Ajouter une route /how_pass_data qui retourne à l'utilisateur un message qui lui
explique comment on passe des données d'un handler/middleware à un autre sur
express
 */

app.get('/how_pass_data', (req, res, next) => {
    const message =
        'On peut passer les donnees entre middleware grace aux objets req et res'
    req.message = message
    next()
})

/*
L'ordre dans lequel nous appliquons nos middleware est très important. Ils
seront exécutés dans l'ordre de nos app.use. Des middlewares peuvent aussi être
executés après un app.get. Ajouter un middleware, /sendMessage qui s'appliquera
à toute les routes et qui se chargera d'envoyer le message de réponse à
l'utilisateur. Il y aura des modifications à appliquer aux routes que vous avez
écrites précédement, afin qu'elles puissent gérer ce middleware.
*/

/*
Ajouter un middleware wrappWithHtml qui s'appliquera à toutes les routes, et qui transformera nos messages texte en messages au format HTML.
Vous pouvez utiliser pour cela ce template:
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Exercices express 2</title>
  </head>

  <body>
    <p>LE TEXTE A RETOURNER DEVRA SE TROUVER ICI</p>
  </body>
</html>

*/

/*
Ajouter une route avec express.Router qui se chargera de gérer une calculatrice.
Ce routeur devra se trouver dans un fichier calc.js On pourra accéder aux
fonctionnalités de notre calculatrice sur la route /calc depuis notre
navigateur. Les opérations de calcul sont accessibles de cette manière:

http://192.168.0.11:7777/calc/add/1/10 devra retourner 11
http://192.168.0.11:7777/calc//div/10/5 devra retourner 15
http://192.168.0.11:7777/calc//mul/15/2 devra retourner 30
http://192.168.0.11:7777/calc//sub/10/9 devra retourner 1 Vous pouvez vous
inspirer des corrections précédentes pour les fonctions de calculs
*/

app.use('/calc', calc)
app.use(wrappWithHtml)
app.use(sendMessage)

app.listen(PORT, IP_LOCAL, () => {
    console.log(`Example app listening at http://${IP_LOCAL}:${PORT}`)
})
