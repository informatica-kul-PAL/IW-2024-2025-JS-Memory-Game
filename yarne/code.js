// Schrijf hier je JavaScript code

const WIDTH = 4;
const HEIGHT = 3;

const RANDOMS = ["Random 3x2", "Random 3x3", "Random 4x3", "Random 4x4", "Random 5x4", "Random 5x5"];

window.onload = () => {
  const selectElement = document.getElementById('puzzleSelect');

  // Add all the puzzles to the select element
  [...Object.keys(puzzles), ...RANDOMS].forEach(puzzle => {
    const option = document.createElement('option');
    option.value = puzzle;
    option.text = puzzle;
    selectElement.add(option);
  });

  const game = gameFromPreset(puzzles[selectElement.value]);
  game.drawFrame();
};

function restartGame() {
  changePuzzle();
}

function changePuzzle() {
  const selected = document.getElementById("puzzleSelect").value;

  if (selected.startsWith("Level")) {
    const game = gameFromPreset(puzzles[selected]);
    game.drawFrame();
  } else {
    const [width, height] = selected.split(" ")[1].split("x").map(Number);

    const game = getRandomPuzzle(width, height);
    game.drawFrame();
  }
}

function gameFromPreset(puzzle) {
  const height = puzzle.length;
  const width = puzzle[0].length;
  const game = new Game(width, height);
  game.board.elements = puzzle.flat();
  return game;
}

function getRandomPuzzle(width, height) {
  const game = new Game(width, height);
  game.populateBoard();
  return game;
}