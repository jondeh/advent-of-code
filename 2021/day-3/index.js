const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8')
const inputNums = input.split('\n')

// part 1
const getBits = arr => {
  let binary = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '1') {
        binary[j]++
      } else {
        binary[j]--
      }
    }
  }
  return binary
}

const setGammaAndEpsilon = () => {
  const binary = getBits(inputNums)
  let gamma = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let epsilon = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] < 0) {
      gamma[i] = 0
      epsilon[i] = 1
    } else {
      gamma[i] = 1
      epsilon[i] = 0
    }
  }
}

// part 2
const getRatingValue = (arr, rating, counter = 0) => {
  //   console.log('arr: ', arr)
  if (arr.length === 1) return parseInt(arr[0], 2)
  let newArr = [...arr]
  let tally = 0
  let newCounter = counter
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][newCounter] === '1') {
      tally++
    } else {
      tally--
    }
  }

  let bitNum
  if (tally >= 0) {
    bitNum = rating === 1 ? 1 : 0
  } else {
    bitNum = rating === 1 ? 0 : 1
  }

  let filteredArr = newArr.filter((e, i) => e[newCounter] == bitNum)
  if (++newCounter < arr[0].length) {
    return getRatingValue(
      filteredArr.length ? filteredArr : newArr,
      rating,
      newCounter
    )
  } else {
    return parseInt(filteredArr[0], 2)
  }
}

const oxygenGeneratorRating = getRatingValue(inputNums, 1)
const co2ScrubberRating = getRatingValue(inputNums, -1)

console.log(oxygenGeneratorRating * co2ScrubberRating)
