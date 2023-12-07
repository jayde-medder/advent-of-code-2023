import { getNumberFromWord } from './helper'

//PART ONE!!

function scoreLine(line: string): number {
  const numberRegex = /\d/
  let numbers: string[] = []
  for (let char of line) {
    if (numberRegex.test(char)) {
      numbers.push(char)
    }
  }
  const last = numbers.length - 1
  const result = [numbers[0], numbers[last]]
  return parseInt(result.join(''))
}

function scoreMultipleLines(file: string): number[] {
  const lineArray = file.split('\n')
  let scores: number[] = []
  for (let line of lineArray) {
    scores.push(scoreLine(line))
  }
  return scores
}

function sumScores(scores: number[]): number {
  return scores.reduce((acc, current) => acc + current, 0)
}

//PART TWO!!

function scoreLineWithWords(line: string): number {
  const numberRegex = /\d/
  const wordRegex = /\b(?:one|two|three|four|five|six|seven|eight|nine)\b/
  let numbers: string[] = []
  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    if (numberRegex.test(char)) {
      numbers.push(char)
    } else {
      const remainingString = line.substring(i)
      console.log(remainingString)
      const match = remainingString.match(wordRegex)
      console.log(match)
      if (match) {
        const matchedWord = match[0].toLowerCase()
        const wordToNumber = getNumberFromWord(matchedWord)
        if (!isNaN(wordToNumber)) {
          numbers.push(wordToNumber.toString())
        }
      }
    }
  }
  console.log('number array: ' + numbers)
  const last = numbers.length - 1
  const result = [numbers[0], numbers[last]]
  console.log(result)
  return parseInt(result.join(''))
}

export { scoreLine, scoreMultipleLines, sumScores, scoreLineWithWords }
