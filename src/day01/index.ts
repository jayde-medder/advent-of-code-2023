import {
  scoreMultipleLines,
  sumScores,
  scoreMultipleLinesWithWords,
} from './day01'
import { readFileAsync } from '../fileutils'

// SOLUTION PART ONE

async function solution(): Promise<number> {
  let result = 0
  const fileContent = await readFileAsync('/src/day01/day01.input.txt')
  if (fileContent !== undefined) {
    const scores = scoreMultipleLines(fileContent)
    result = sumScores(scores)
  } else {
    console.error('Error: fileContent is undefined.')
  }

  return result
}

// OUTPUT
solution()
  .then((result) => console.log('Final Result Part 1:', result))
  .catch((error) => console.error('Error in solution:', error))

async function solutionPartTwo(): Promise<number> {
  let result = 0
  const fileContent = await readFileAsync('/src/day01/day01.input.txt')
  if (fileContent !== undefined) {
    const scores = scoreMultipleLinesWithWords(fileContent)
    result = sumScores(scores)
  } else {
    console.error('Error: fileContent is undefined.')
  }

  return result
}

// OUTPUT
solutionPartTwo()
  .then((result) => console.log('Final Result Part 2:', result))
  .catch((error) => console.error('Error in solution:', error))
