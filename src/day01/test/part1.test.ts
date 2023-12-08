import { describe, test, expect } from 'vitest'
import { scoreLine, scoreMultipleLines, sumScores } from '../day01'
import { readFileAsync } from '../../fileutils'

//PART ONE TESTS!

describe('PART ONE scoreLine works as expected', () => {
  test('Example 1', () => {
    const line = '1abc2'
    const expected = 12

    const actual = scoreLine(line)

    expect(actual).toEqual(expected)
  })

  test('Example 2', () => {
    const line = 'pqr3stu8vwx'
    const expected = 38

    const actual = scoreLine(line)

    expect(actual).toEqual(expected)
  })

  test('Example 3', () => {
    const line = 'a1b2c3d4e5f'
    const expected = 15

    const actual = scoreLine(line)

    expect(actual).toEqual(expected)
  })

  test('Example 4', () => {
    const line = 'treb7uchet'
    const expected = 77

    const actual = scoreLine(line)

    expect(actual).toEqual(expected)
  })
})

describe('PART ONE scoreMultipleLines works as expected', () => {
  test('Text File Example 1: ', async () => {
    const fileContent = await readFileAsync('/src/day01/test/part1.example.txt')
    const expected = [12, 38, 15, 77]
    if (fileContent !== undefined) {
      const actual = scoreMultipleLines(fileContent)
      expect(actual).toEqual(expected)
    } else {
      console.error('Error: fileContent is undefined.')
    }
  })
})

describe('PART ONE sumScores works as expected', () => {
  test('Text File Example 1: ', async () => {
    const fileContent = await readFileAsync('/src/day01/test/part1.example.txt')
    const expected = 142
    if (fileContent !== undefined) {
      const scores = scoreMultipleLines(fileContent)
      const actual = sumScores(scores)
      expect(actual).toEqual(expected)
    } else {
      console.error('Error: fileContent is undefined.')
    }
  })
})
