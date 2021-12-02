const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8')
const inputNums = input.split('\n').map(e => e.split(' '))

let depth = 0
let horizontalPosition = 0
let aim = 0

for (let i = 0; i < inputNums.length; i++) {
  let direction = inputNums[i][0]
  switch (direction) {
    case 'forward':
      horizontalPosition += +inputNums[i][1]
      depth += aim * +inputNums[i][1]
      break
    case 'up':
      aim -= +inputNums[i][1]
      break
    case 'down':
      aim += +inputNums[i][1]
      break
  }
}

console.log(depth * horizontalPosition)
