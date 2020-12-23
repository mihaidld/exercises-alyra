/*
Ecrivez un programme qui determine lequel de ces 4 sites répond le plus
rapidement aux rêquetes http
https://www.facebook.com 
https://www.amazon.com 
https://www.apple.com
https://www.google.com
 */
import axios from 'axios'

//variante 1
const getFacebookResponse = () => {
    return axios.get('https://www.facebook.com')
}
const getAmazonResponse = () => {
    return axios.get('https://www.amazon.com')
}
const getAppleResponse = () => {
    return axios.get('https://www.apple.com')
}
const getGoogleResponse = () => {
    return axios.get('https://www.google.com')
}

Promise.race([
    getFacebookResponse(),
    getAmazonResponse(),
    getAppleResponse(),
    getGoogleResponse(),
])
    .then((response) => response.config.url)
    .then((url) => console.log(url))
    .catch((error) => console.error(error))

//variante 2
let data = await Promise.race([
    axios.get('https://www.facebook.com').then(() => 'facebook'),
    axios.get('https://www.amazon.com').then(() => 'amazon'),
    axios.get('https://www.apple.com').then(() => 'apple'),
    axios.get('https://www.google.com').then(() => 'google'),
]).catch((error) => console.error(error))
console.log(data)
