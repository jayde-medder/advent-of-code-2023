import { describe, test, expect } from 'vitest'
import { readFileAsync } from '../../fileutils'
import { getAllNumbers, getSymbols, getParts, sumOfParts } from '../day03'

describe('PART ONE getParts works as expected', () => {
  test('Example 1', async () => {
    const fileContent = await readFileAsync('/src/day03/test/example.txt')
    const expected = [
      {
        digits: 467,
        index: 0,
        line: 0,
      },
      {
        digits: 114,
        index: 5,
        line: 0,
      },
      {
        digits: 35,
        index: 2,
        line: 2,
      },
      {
        digits: 633,
        index: 6,
        line: 2,
      },
      {
        digits: 617,
        index: 0,
        line: 4,
      },
      {
        digits: 58,
        index: 7,
        line: 5,
      },
      {
        digits: 592,
        index: 2,
        line: 6,
      },
      {
        digits: 755,
        index: 6,
        line: 7,
      },
      {
        digits: 664,
        index: 1,
        line: 9,
      },
      {
        digits: 598,
        index: 5,
        line: 9,
      },
    ]

    const actual = getAllNumbers(fileContent)

    expect(actual).toEqual(expected)
  })
  test('Example 1', async () => {
    const fileContent = await readFileAsync('/src/day03/test/example2.txt')
    const expected = [
      {
        digits: 1,
        index: 2,
        line: 0,
      },
      {
        digits: 7,
        index: 0,
        line: 1,
      },
      {
        digits: 4,
        index: 2,
        line: 2,
      },
    ]

    const actual = getAllNumbers(fileContent)

    expect(actual).toEqual(expected)
  })
})

describe('PART ONE getSymbols works as expected', () => {
  test('Example 1', async () => {
    const fileContent = await readFileAsync('/src/day03/test/example.txt')
    const expected = [
      {
        index: 3,
        line: 1,
        symbol: '*',
      },
      {
        index: 6,
        line: 3,
        symbol: '#',
      },
      {
        index: 3,
        line: 4,
        symbol: '*',
      },
      {
        index: 5,
        line: 5,
        symbol: '+',
      },
      {
        index: 3,
        line: 8,
        symbol: '$',
      },
      {
        index: 5,
        line: 8,
        symbol: '*',
      },
    ]
    const actual = getSymbols(fileContent)

    expect(actual).toEqual(expected)
  })
  test('Example 2', async () => {
    const fileContent = await readFileAsync('/src/day03/test/example2.txt')
    const expected = [
      {
        index: 1,
        line: 0,
        symbol: '*',
      },
    ]
    const actual = getSymbols(fileContent)

    expect(actual).toEqual(expected)
  })
})
describe('PART ONE getParts works as expected', () => {
  test('Example 1', async () => {
    const fileContent = await readFileAsync('/src/day03/test/example.txt')
    const potentialParts = getAllNumbers(fileContent)
    const symbols = getSymbols(fileContent)
    const expected = [467, 35, 633, 617, 592, 755, 664, 598]
    const actual = getParts(potentialParts, symbols)
    expect(actual).toEqual(expected)
  })
  test('Example 1', async () => {
    const fileContent = await readFileAsync('/src/day03/test/example2.txt')
    const potentialParts = getAllNumbers(fileContent)
    const symbols = getSymbols(fileContent)
    const expected = [1, 7]
    const actual = getParts(potentialParts, symbols)
    expect(actual).toEqual(expected)
  })
})

describe('PART ONE sumOfParts works as expected', () => {
  test('Example 1', async () => {
    const fileContent = await readFileAsync('/src/day03/test/example.txt')
    const potentialParts = getAllNumbers(fileContent)
    const symbols = getSymbols(fileContent)
    const parts = getParts(potentialParts, symbols)
    const expected = 4361
    const actual = sumOfParts(parts)
    expect(actual).toEqual(expected)
  })
  test('Example 2', async () => {
    const fileContent = await readFileAsync('/src/day03/test/example2.txt')
    const potentialParts = getAllNumbers(fileContent)
    const symbols = getSymbols(fileContent)
    const parts = getParts(potentialParts, symbols)
    const expected = 8
    const actual = sumOfParts(parts)
    expect(actual).toEqual(expected)
  })
})
