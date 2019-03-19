import { existsSync, readFileSync } from 'fs';
import Path from 'path';

/**
 * Ensures a game.json file is valid.
 * @param {Object} gameData the content of a game.json file
 * @returns {Boolean}
 */
function isValidGame(gameData) {
  return gameData && gameData.name;
}

export class Game {
  constructor(gameData, workspacePath) {
    this.name = gameData.name;
    this.workspacePath = workspacePath;
  }
}

/**
 * Opens a game definition.
 * @param {String} workspacePath the path to the game directory
 * @returns {Game|null} returns the game definition OR null if invalid
 */
function openGame(workspacePath) {
  try {
    const gameFilePath = Path.join(workspacePath, 'game.json');
    if (!existsSync(gameFilePath)) {
      return null;
    }
    const gameFileContent = readFileSync(gameFilePath);
    const gameData = JSON.parse(gameFileContent);
    if (!isValidGame(gameData)) {
      return null;
    }
    return new Game(gameData, workspacePath);
  } catch (err) {
    return null;
  }
}

export default {
  Game,
  openGame,
};
