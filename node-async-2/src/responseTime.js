import axios from 'axios'

let startFa,
    endFa,
    startAm,
    endAm,
    startAp,
    endAp,
    startGo,
    endGo,
    startUn,
    endUn

startUn = new Date()
axios
    .get('https://www.underarmour.com/en-us/')
    .then(() => 'underarmour')
    .catch((error) => console.error(error))
endUn = new Date()

startFa = new Date()
axios
    .get('https://www.facebook.com')
    .then(() => 'facebook')
    .catch((error) => console.error(error))
endFa = new Date()

startAm = new Date()
axios
    .get('https://www.amazon.com')
    .then(() => 'amazon')
    .catch((error) => console.error(error))
endAm = new Date()

startAp = new Date()
axios
    .get('https://www.apple.com')
    .then(() => 'apple')
    .catch((error) => console.error(error))
endAp = new Date()

startGo = new Date()
axios
    .get('https://www.google.com')
    .then(() => 'google')
    .catch((error) => console.error(error))
endGo = new Date()

console.log(
    `Underarmour: operation took ${
        endUn.getTime() - startUn.getTime()
    } milliseconds`
)
console.log(
    `Facebook: operation took ${
        endFa.getTime() - startFa.getTime()
    } milliseconds`
)
console.log(
    `Amazon: operation took ${endAm.getTime() - startAm.getTime()} milliseconds`
)
console.log(
    `Apple: operation took ${endAp.getTime() - startAp.getTime()} milliseconds`
)
console.log(
    `Google: operation took ${endGo.getTime() - startGo.getTime()} milliseconds`
)
