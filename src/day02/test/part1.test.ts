import { describe, test, expect } from 'vitest'
import {
  getGameArray,
  maxEachColorByGame,
  possibleGames,
  sumIds,
} from '../day02'
import { readFileAsync } from '../helper'

describe('PART ONE maxEachColorByGame works as expected', () => {
  test('Example 1', () => {
    const game = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
    const expected = { blue: 6, red: 4, green: 2 }

    const actual = maxEachColorByGame(game)

    expect(actual).toEqual(expected)
  })

  test('Example 2', () => {
    const game =
      'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'
    const expected = { blue: 4, red: 1, green: 3 }

    const actual = maxEachColorByGame(game)

    expect(actual).toEqual(expected)
  })

  test('Example 3', () => {
    const game =
      'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
    const expected = { blue: 6, red: 20, green: 13 }

    const actual = maxEachColorByGame(game)

    expect(actual).toEqual(expected)
  })

  test('Example 4', () => {
    const game =
      'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'
    const expected = { blue: 15, red: 14, green: 3 }

    const actual = maxEachColorByGame(game)

    expect(actual).toEqual(expected)
  })

  test('Example 5', () => {
    const game = 'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
    const expected = { blue: 2, red: 6, green: 3 }

    const actual = maxEachColorByGame(game)

    expect(actual).toEqual(expected)
  })
})

describe('PART ONE getGameArray works as expected', () => {
  test('Example 1', async () => {
    const fileContent = await readFileAsync('test/part1.example.txt')
    const expected = [
      {
        id: 1,
        colorCounts: { blue: 6, red: 4, green: 2 },
      },
      {
        id: 2,
        colorCounts: { blue: 4, red: 1, green: 3 },
      },
      {
        id: 3,
        colorCounts: { blue: 6, red: 20, green: 13 },
      },
      {
        id: 4,
        colorCounts: { blue: 15, red: 14, green: 3 },
      },
      {
        id: 5,
        colorCounts: { blue: 2, red: 6, green: 3 },
      },
    ]
    if (fileContent !== undefined) {
      const actual = getGameArray(fileContent)
      expect(actual).toEqual(expected)
    } else {
      console.error('Error: fileContent is undefined.')
    }
  })
})

describe('PART ONE possibleGames works as expected', () => {
  test('Example 1', async () => {
    const fileContent = await readFileAsync('test/part1.example.txt')
    const expected = [
      { id: 1, colorCounts: { blue: 6, red: 4, green: 2 } },
      { id: 2, colorCounts: { blue: 4, red: 1, green: 3 } },
      { id: 5, colorCounts: { blue: 2, red: 6, green: 3 } },
    ]
    if (fileContent !== undefined) {
      const gameArray = getGameArray(fileContent)
      const actual = possibleGames(gameArray)
      expect(actual).toEqual(expected)
    } else {
      console.error('Error: fileContent is undefined.')
    }
  })
})

describe('PART ONE sumIds works as expected', () => {
  test('Example 1', async () => {
    const fileContent = await readFileAsync('test/part1.example.txt')
    const expected = 8
    if (fileContent !== undefined) {
      const gameArray = getGameArray(fileContent)
      const successfulGames = possibleGames(gameArray)
      const actual = sumIds(successfulGames)
      expect(actual).toEqual(expected)
    } else {
      console.error('Error: fileContent is undefined.')
    }
  })
})
