import { PartialPart, Symbol, Part } from './models'

function getAllNumbers(fileContent: string): PartialPart[] {
  let partsArray: PartialPart[] = []

  let partDigits = ''
  let firstIndex = -1

  const numberRegex = /\d/
  let inNumber = false
  let partProcessed = false
  const lineArray = fileContent.split('\n')

  //for each character in each line
  lineArray.forEach((line, index) => {
    for (let i = 0; i <= line.length; i++) {
      const char = line[i]
      inNumber = numberRegex.test(char)

      //if in number construct part digits
      if (inNumber) {
        partProcessed = false
        partDigits += char
        if (firstIndex === -1) {
          firstIndex = i
        }
      }

      //process new part
      if (!inNumber && firstIndex !== -1 && partProcessed === false) {
        partsArray.push({
          digits: parseInt(partDigits),
          line: index,
          index: firstIndex,
        })

        //reset new part attributes
        partDigits = ''
        firstIndex = -1

        partProcessed = true
      }
    }
  })
  return partsArray
}

function getSymbols(fileContent: string): Symbol[] {
  //initialise new symbols array
  let symbolArray: Symbol[] = []
  const symbolRegex = /[!@#$%^&*+=/-]/
  const lineArray = fileContent.split('\n')

  lineArray.forEach((line, index) => {
    for (let i = 0; i < line.length; i++) {
      const char = line[i]
      //if symbol create new symbol object
      if (symbolRegex.test(char)) {
        symbolArray.push({
          symbol: char,
          line: index,
          index: i,
        })
      }
    }
  })
  return symbolArray
}

function getParts(parts: PartialPart[], symbols: Symbol[]): number[] {
  let partNumbersArray: number[] = []
  parts.forEach((part) => {
    let partProcessed = false
    symbols.forEach((symbol) => {
      if (
        part.line === symbol.line ||
        part.line - 1 === symbol.line ||
        part.line + 1 === symbol.line
      ) {
        for (
          let i = part.index;
          i < part.index + part.digits.toString().length;
          i++
        ) {
          if (
            (i === symbol.index ||
              i - 1 === symbol.index ||
              i + 1 === symbol.index) &&
            !partProcessed
          ) {
            partNumbersArray.push(part.digits)
            partProcessed = true
          }
        }
      }
    })
  })
  return partNumbersArray
}

function sumOfParts(parts: number[]): number {
  let sum = 0
  for (let i = 0; i < parts.length; i++) {
    sum += parts[i]
  }
  return sum
}

export { getAllNumbers, getSymbols, getParts, sumOfParts }
