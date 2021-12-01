const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8')
const inputNums = input.split('\n').map(Number)

const countLarger = arr => {
  // part 1
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      counter++
    }
  }
  return counter
}

const getThrees = arr => {
  // part 2
  let copyArr = [...arr]
  let threes = []
  let counter = 0

  while (counter + 2 < arr.length) {
    threes.push(
      copyArr.slice(counter, counter + 3).reduce((a, v) => (a += v), 0)
    )
    counter++
  }
  return countLarger(threes)
}

console.log(getThrees(inputNums))
