let inputString = 'Hello, bovine world!'

if (process.argv[2] != undefined) {
    inputString = process.argv[2];
}

let head = ''
let stringField = `< ${inputString} >`
let headEnd = ''
let whiteSpace =''


for (let i = 0; i < stringField.length; i++){
    head += '_'
    headEnd += '-'
}
for (let i = 0; i < stringField.length/2; i++){
    whiteSpace += ' '
}

let body = `${head}
${stringField}
${headEnd}
${whiteSpace}\\   ^__^
${whiteSpace} \\  (oo)\\_______
${whiteSpace}    (__)\\       )\\/\\
${whiteSpace}        ||----w |
${whiteSpace}        ||     ||
`

console.log(body)