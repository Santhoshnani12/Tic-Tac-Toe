export default class GameView {

  updateboard(game) {
    this.updateTurn(game)
    let winningCombination = game.findWinningCombinations()
    for(let i=0;i<game.boardArray.length;i++) {
      const tile = document.querySelector(`.board-tile[data-index='${i}']`)

      let tileType = game.boardArray[i] === 'X' ? 'tile-X' : 'tile-O'

      tile.classList.remove('winner')
      
      tile.innerHTML = `<span class='${tileType}'>${(game.boardArray[i]) ? game.boardArray[i] : ''}</span>`

      if(winningCombination && winningCombination.includes(i)) {
        tile.classList.add('winner')
      }
    }
  }

  updateTurn(game) {
    let playerX = document.querySelector('.player-x')
    let playerO = document.querySelector('.player-o')

    playerX.classList.remove('active')
    playerO.classList.remove('active')

    if(game.turn === 'X') {
      playerX.classList.add('active')
    } else {
      playerO.classList.add('active')
    }
  }
}