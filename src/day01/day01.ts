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

export { scoreLine, scoreMultipleLines, sumScores }
