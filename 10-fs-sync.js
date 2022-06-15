const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')

const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt', 
    `the result is ${first}, ${second}`,
    {flag: 'a'})

console.log('done with this')
console.log('starting with next one')