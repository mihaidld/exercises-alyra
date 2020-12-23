import express from 'express'

export const calc = express.Router()

const add = (number1, number2) => number1 + number2
const sub = (number1, number2) => number1 - number2
const mul = (number1, number2) => number1 * number2
const div = (number1, number2) => {
    if (number2 !== 0) {
        return number1 / number2
    } else {
        return `error (division by 0), please enter a second number different from 0`
    }
}

calc.get('/:op/:number1/:number2', (req, res, next) => {
    let op = req.params.op
    let number1 = Number(req.params.number1)
    let number2 = Number(req.params.number2)
    let result = 0
    switch (op.toLowerCase()) {
        case 'add':
            result =
                isFinite(number1) && isFinite(number2)
                    ? add(number1, number2)
                    : 'please enter valid numbers'
            break
        case 'sub':
            result =
                isFinite(number1) && isFinite(number2)
                    ? sub(number1, number2)
                    : 'please enter valid numbers'
            break
        case 'mul':
            result =
                isFinite(number1) && isFinite(number2)
                    ? mul(number1, number2)
                    : 'please enter valid numbers'
            break
        case 'div':
            result =
                isFinite(number1) && isFinite(number2)
                    ? div(number1, number2)
                    : 'please enter valid numbers'
            break
        default:
            result = `invalid operator or numbers`
    }
    req.message = `The result of the operation is : ${String(result)}`
    next()
})
/* calc.get('/add/:number1/:number2', (req, res, next) => {
    let number1 = Number(req.params.number1)
    let number2 = Number(req.params.number2)
    let result =
        isFinite(number1) && isFinite(number2)
            ? add(number1, number2)
            : 'please enter valid numbers'
    req.message = `The result of the operation is : ${String(result)}`
    next()
})
calc.get('/sub/:number1/:number2', (req, res, next) => {
    let number1 = Number(req.params.number1)
    let number2 = Number(req.params.number2)
    let result =
        isFinite(number1) && isFinite(number2)
            ? sub(number1, number2)
            : 'please enter valid numbers'
    req.message = `The result of the operation is : ${String(result)}`
    next()
})
calc.get('/mul/:number1/:number2', (req, res, next) => {
    let number1 = Number(req.params.number1)
    let number2 = Number(req.params.number2)
    let result =
        isFinite(number1) && isFinite(number2)
            ? mul(number1, number2)
            : 'please enter valid numbers'
    req.message = `The result of the operation is : ${String(result)}`
    next()
})
calc.get('/div/:number1/:number2', (req, res, next) => {
    let number1 = Number(req.params.number1)
    let number2 = Number(req.params.number2)
    let result =
        isFinite(number1) && isFinite(number2)
            ? div(number1, number2)
            : 'please enter valid numbers'
    req.message = `The result of the operation is : ${String(result)}`
    next()
}) */
