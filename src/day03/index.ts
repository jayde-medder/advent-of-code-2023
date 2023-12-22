import { readFileAsync } from '../fileutils'
import { getAllNumbers, getSymbols, getParts, sumOfParts } from './day03'

// SOLUTION PART ONE

async function solution(): Promise<number> {
  const fileContent = await readFileAsync('./src/day03/day03.input.txt')
  let result: number = 0
  if (fileContent !== undefined) {
    const potentialParts = getAllNumbers(fileContent)
    const symbols = getSymbols(fileContent)
    const parts = getParts(potentialParts, symbols)
    result = sumOfParts(parts)
  } else {
    console.error('Error: fileContent is undefined.')
  }
  return result
}

// OUTPUT
solution()
  .then((result) => console.log('Final Result Part 1:', result))
  .catch((error) => console.error('Error in solution:', error))
