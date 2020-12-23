'use strict'
/*
Ecrivez un qcm de 5 questions. Le joueur devra repondre aux questions en entrant le nombre correspondant à la bonne réponse. A la fin du qcm vous lui donnerez sa note qui correspondera au nombre de bonnes reponses sur les 5 questions. Je vous propose les 5 questions et les choix possibles, mais vous pouvez créer les votre si vous voulez:

Question 1: Le C++ est un:
1: langage => réponse attendue
2: compilateur

Question 2: TypeScript est une évolution de Javascript:
1: Vrai => réponse attendue
2: Faux

Question 3: Lire les cours avant de faire les éxercices est inutile:
1: Vrai
2: Faux => réponse attendue

Question 4: react.js a été developpé par Google:
1: Vrai
2: Faux => réponse attendue

Question 5: Ethereum est une blockchain publique:
1: Vrai => réponse attendue
2: Faux
*/
import readlineSync from 'readline-sync'
let questionnaire = [
    {
        question: 'Question 1: Le C++ est un:',
        1: 'langage',
        2: 'compilateur',
        isCorrect: '1',
    },
    {
        question: 'Question 2: TypeScript est une évolution de Javascript:',
        1: 'Vrai',
        2: 'Faux',
        isCorrect: '1',
    },
    {
        question:
            'Question 3: Lire les cours avant de faire les exercices est inutile:',
        1: 'Vrai',
        2: 'Faux',
        isCorrect: '2',
    },
    {
        question: 'Question 4: react.js a été developpé par Google:',
        1: 'Vrai',
        2: 'Faux',
        isCorrect: '2',
    },
    {
        question: 'Question 5: Ethereum est une blockchain publique:',
        1: 'Vrai',
        2: 'Faux',
        isCorrect: '1',
    },
]
let score = 0
for (let element of questionnaire) {
    let choix = [element['1'], element['2']]
    let index = readlineSync.keyInSelect(choix, element.question)
    if (index + 1 == element.isCorrect) {
        score++
    }
}
console.log(
    `You have answered correctly to ${score} out of ${questionnaire.length} questions`
)
