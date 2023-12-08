import { MaxColors, Game } from './models'

function maxEachColorByGame(gameString: string): MaxColors {
  const colorCounts: MaxColors = {
    blue: 0,
    red: 0,
    green: 0,
  }
  const cleanedGame = gameString.replace(/^Game \d+: /, '').split('; ')
  const handfuls = cleanedGame
  handfuls.forEach((handful) => {
    const handfulArray = handful.split(', ')
    handfulArray.forEach((colorValue) => {
      const [count, color] = colorValue.split(' ')
      const countNumber = parseInt(count, 10)
      if (
        colorCounts[color] === undefined ||
        countNumber > colorCounts[color]
      ) {
        colorCounts[color] = countNumber
      }
    })
  })
  return colorCounts
}

function getGameArray(fileContent: string): Game[] {
  const gameStrings = fileContent.split('\n')
  const gameArray: Game[] = []
  gameStrings.forEach((gameString, index) => {
    const game: Game = {
      id: index + 1,
      colorCounts: maxEachColorByGame(gameString),
    }
    gameArray.push(game)
  })
  return gameArray
}

function possibleGames(gameMaxes: Game[]): Game[] {
  const bag: MaxColors = {
    blue: 14,
    red: 12,
    green: 13,
  }
  const successfulGames: Game[] = []
  gameMaxes.forEach((game, index) => {
    if (
      game.colorCounts.blue <= bag.blue &&
      game.colorCounts.red <= bag.red &&
      game.colorCounts.green <= bag.green
    ) {
      successfulGames.push(game)
    }
  })
  return successfulGames
}

function sumIds(games: Game[]): number {
  let sum = 0
  games.forEach((game) => {
    sum += game.id
  })
  return sum
}

//Only for testing
function powerOfMinimumSet(gameString: string): number {
  const colorCounts: MaxColors = maxEachColorByGame(gameString)
  const product = Object.values(colorCounts).reduce(
    (acc, value) => acc * value,
    1
  )
  return product
}

function sumOfPowers(gameArray: Game[]): number {
  let sum = 0
  gameArray.forEach((game) => {
    const minimumSet = game.colorCounts
    const product = Object.values(minimumSet).reduce(
      (acc, value) => acc * value,
      1
    )
    sum += product
  })
  return sum
}

export {
  maxEachColorByGame,
  getGameArray,
  possibleGames,
  sumIds,
  powerOfMinimumSet,
  sumOfPowers,
}
