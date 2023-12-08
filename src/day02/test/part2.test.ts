import { describe, test, expect } from 'vitest'
import { readFileAsync } from '../../fileutils'
import { powerOfMinimumSet, getGameArray, sumOfPowers } from '../day02'

describe('PART TWO powerOfMinimumSet works as expected', () => {
  test('Example 1', () => {
    const game = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
    const expected = 48

    const actual = powerOfMinimumSet(game)

    expect(actual).toEqual(expected)
  })

  test('Example 2', () => {
    const game =
      'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'
    const expected = 12

    const actual = powerOfMinimumSet(game)

    expect(actual).toEqual(expected)
  })

  test('Example 3', () => {
    const game =
      'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
    const expected = 1560

    const actual = powerOfMinimumSet(game)

    expect(actual).toEqual(expected)
  })

  test('Example 4', () => {
    const game =
      'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'
    const expected = 630

    const actual = powerOfMinimumSet(game)

    expect(actual).toEqual(expected)
  })

  test('Example 5', () => {
    const game = 'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
    const expected = 36

    const actual = powerOfMinimumSet(game)

    expect(actual).toEqual(expected)
  })
})

describe('PART TWO sumOfPowers works as expected', () => {
  test('Example 1', async () => {
    const fileContent = await readFileAsync('/src/day02/test/part1.example.txt')
    const expected = 2286
    if (fileContent !== undefined) {
      const gameArray = getGameArray(fileContent)
      const actual = sumOfPowers(gameArray)
      expect(actual).toEqual(expected)
    } else {
      console.error('Error: fileContent is undefined.')
    }
  })
})
