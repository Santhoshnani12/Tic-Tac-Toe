import Game from "./game.js"
import GameView from "./gameView.js"

let game = new Game()
let gameView = new GameView()

let tiles = document.querySelectorAll('.board-tile');
const refreshButton = document.querySelector('.game-btn')

refreshButton.addEventListener('click', () => {
  onRestartClick()
})

// refreshButton.addEventListener('click', () => {
//   window.location.reload()
// })

tiles.forEach(tile => {
  tile.addEventListener('click', () => {
    onTileClick(tile.dataset.index)
  })
})

function onTileClick(i) {
  game.makeMove(i)
  gameView.updateboard(game)
}

function onRestartClick() {
  game = new Game()
  gameView.updateboard(game)
}

gameView.updateboard(game)