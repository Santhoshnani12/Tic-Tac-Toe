export default class Game {
  constructor() {
    this.turn = "X"
    this.boardArray = new Array(9).fill(null)
  }

  nextTurn() {
    if(this.turn === "X") {
      this.turn = "O"
    } else {
      this.turn = "X"
    }
  }

  makeMove(i) {

    if(this.endOfGame()) {
      return;
    }

    if(this.boardArray[i]) {
      return;
    }

    this.boardArray[i] = this.turn

    let winningCombination = this.findWinningCombinations()

    if(!winningCombination) {
      this.nextTurn()
    }

  }

  findWinningCombinations() {
    const winningCombinationArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0 ,3 ,6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for(let combination of winningCombinationArray) {
      const [a, b, c] = combination

      if(this.boardArray[a] && (this.boardArray[a] === this.boardArray[b] && this.boardArray[b] === this.boardArray[c])) {
        return combination
      } 
    }
    return null
  }

  endOfGame() {
    let winningCombination = this.findWinningCombinations()
    if(winningCombination) {
      return true
    } else {
      return false
    }
  }

}