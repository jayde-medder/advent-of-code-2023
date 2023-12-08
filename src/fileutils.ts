// src/fileUtils.ts

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

export { readFileAsync }
