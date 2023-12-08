import { promises as fsPromises } from 'fs'

async function readFileAsync(filePath: string) {
  try {
    const fullPath = `${__dirname}/${filePath}`
    const fileContent = await fsPromises.readFile(fullPath, 'utf8')
    return fileContent
  } catch (err) {
    console.error('Error reading the file:', err)
    return undefined
  }
}

function getNumberFromWord(word: string): number {
  switch (word) {
    case 'one':
      return 1
    case 'two':
      return 2
    case 'three':
      return 3
    case 'four':
      return 4
    case 'five':
      return 5
    case 'six':
      return 6
    case 'seven':
      return 7
    case 'eight':
      return 8
    case 'nine':
      return 9
    default:
      return NaN
  }
}

export { getNumberFromWord, readFileAsync }
