import { describe, test, expect } from 'vitest'
import { scoreLineWithWords } from '../day01'

//PART TWO TESTS

describe('PART TWO scoreLine works as expected', () => {
  test('Example 1', () => {
    const line = 'two1nine'
    const expected = 29

    const actual = scoreLineWithWords(line)

    expect(actual).toEqual(expected)
  })

  test('Example 2', () => {
    const line = 'eightwothree'
    const expected = 83

    const actual = scoreLineWithWords(line)

    expect(actual).toEqual(expected)
  })

  test('Example 3', () => {
    const line = 'abcone2threexyz'
    const expected = 13

    const actual = scoreLineWithWords(line)

    expect(actual).toEqual(expected)
  })

  test('Example 4', () => {
    const line = 'xtwone3four'
    const expected = 24

    const actual = scoreLineWithWords(line)

    expect(actual).toEqual(expected)
  })

  test('Example 5', () => {
    const line = '4nineeightseven2'
    const expected = 42

    const actual = scoreLineWithWords(line)

    expect(actual).toEqual(expected)
  })

  test('Example 6', () => {
    const line = 'zoneight234'
    const expected = 14

    const actual = scoreLineWithWords(line)

    expect(actual).toEqual(expected)
  })

  test('Example 7', () => {
    const line = '7pqrstsixteen'
    const expected = 76

    const actual = scoreLineWithWords(line)

    expect(actual).toEqual(expected)
  })
})
