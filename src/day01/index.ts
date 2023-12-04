import { scoreLine, scoreMultipleLines, sumScores } from './day01'
import { readFileAsync } from './readFile'

async function solution(): Promise<number> {
  let result = 0
  const fileContent = await readFileAsync('./day01.input.txt')
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
  .then((result) => console.log('Final Result:', result))
  .catch((error) => console.error('Error in solution:', error))
