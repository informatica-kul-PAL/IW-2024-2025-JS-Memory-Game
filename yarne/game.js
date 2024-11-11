const GameStates = Object.freeze({
  FIRST: 0,
  SECOND: 1,
  NEXT: 2,
  END: 3
});

const COLORS = [
  "#EB5E28",    
  "#BCA0BC",    
  "#3DD6D0",    
  "#E94F37",    
  "#F45B69",    
  "#4CB963",    
  "#FFA500",    
  "#800080",    
  "#008000",    
  "#81A4CD"
];

class Game {
  constructor(width, height) {
    if (height <= 0 || width <= 0) throw new Error("Game's width and height can not be less than 0.");
    this.currentPlayer = Math.floor(Math.random() * 2);
    this.scores = [0, 0];
    this.width = width;
    this.height = height;
    this.board = new Matrix(height, width);

    this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      .split("")
      .sort(() => Math.random() - 0.5)
      .slice(0, this.board.size());

    this.first = -1;
    this.second = -1;
    this.flipped = 0; // Create a mask
    this.state = GameStates.FIRST;

    this.elements = {
      player1: document.getElementById("player1"),
      player2: document.getElementById("player2"),
      state: document.getElementById("state")
    }

    this._setGridStyles(width, height);
  }

  _setGridStyles(width, height) {
    const root = document.documentElement;
    root.style.setProperty('--cols', width);
    root.style.setProperty('--rows', height);
  }

  flipCard(index) {
    this.flipped |= 1 << index;
  }

  isFlipped(index) {
    return this.flipped & (1 << index);
  }

  unflipCard(index) {
    this.flipped &= ~(1 << index);
  }

  nextPlayer() {
    this.currentPlayer = (this.currentPlayer + 1) % 2;
  }

  getCurrentPlayerName() {
    return `Player ${this.currentPlayer +1 }`;
  }

  populateBoard() {
    const isOdd = this.width * this.height % 2 === 1;

    let cards = Math.floor((this.width * this.height) / 2);
    let center = Math.floor(this.board.size() / 2);
    for (let i = 0; i <= cards; i++) {
      let idx1 = Math.floor(Math.random() * this.board.size());
      let idx2 = Math.floor(Math.random() * this.board.size());

      while (
        idx1 == idx2 || 
        this.board.getFromIndex(idx1) || 
        this.board.getFromIndex(idx2) ||
        (isOdd && (idx1 === center || idx2 === center))
      ) {
        if (this.board.getFromIndex(idx1)) idx1 = Math.floor(Math.random() * this.board.size());
        if (this.board.getFromIndex(idx2)) idx2 = Math.floor(Math.random() * this.board.size());
        if (idx1 === center) idx1 = Math.floor(Math.random() * this.board.size());
        if (idx2 === center) idx2 = Math.floor(Math.random() * this.board.size());
        if (idx1 == idx2) idx2 = Math.floor(Math.random() * this.board.size());
      }

      this.board.setWithIndex(idx1, i);
      this.board.setWithIndex(idx2, i);
    }
  }

  handleCardClick(e) {
    const index = parseInt(e.target.id);
    if (this.isFlipped(index) || this.state === GameStates.END || (this.state === GameStates.SECOND && this.second > 0)) return;

    if (this.state === GameStates.FIRST) this._firstClick(index);
    else if (this.state === GameStates.SECOND) this._secondClick(index);

    this.drawFrame();

    if (this.state === GameStates.END) this.elements.state.innerHTML = `Game over! ${this.getCurrentPlayerName()} wins!`;
  }

  _firstClick(index) {
    this.first = index;
    this.flipCard(index);
    this.state = GameStates.SECOND;
  }

  _secondClick(index) {
    this.second = index;
    this.flipCard(index);
    
    if (this.board.getFromIndex(this.first) === this.board.getFromIndex(this.second)) {
        this.scores[this.currentPlayer]++;
        this.state = GameStates.FIRST;
        this.first = -1;
        this.second = -1;
        if (this.checkEndGame()) this.state = GameStates.END;
    } else {
       setTimeout(() => {
        this.nextPlayer();
        this.state = GameStates.FIRST;
        
        this.unflipCard(this.first);
        this.unflipCard(this.second);

        this.first = -1;
        this.second = -1;

        this.drawFrame();
      }, 500); 
    }
  }

  checkEndGame() {
    return this.flipped === (1 << this.board.size()) - 1;
  }

  displayScore() {
    this.elements.player1.innerHTML = `Player 1: ${this.scores[0]}`;
    this.elements.player2.innerHTML = `Player 2: ${this.scores[1]}`;

    const firstOrSecond = this.state === GameStates.FIRST ? "first" : "second";
    this.elements.state.innerHTML = `It's ${this.getCurrentPlayerName()}'s turn, draw your ${firstOrSecond} card.`;

    return this;
  }

  displayBoard(container) {
    const isOdd = this.width * this.height % 2 === 1;
    const center = Math.floor(this.board.size() / 2);

    container.innerHTML = this.board
      .getElements()
      .map((el, i) => isOdd && i === center
        ? `<div class="card flipped">🌟</div>`
        : this.isFlipped(i)
          ? `<div class="card flipped" style="background-color: ${COLORS[el-1]}" id="${i}">${this.chars[el-1]}</div>`
          : `<div class="card" id="${i}"></div>`
      )
      .join("");

    const cards = container.querySelectorAll(".card");
    cards.forEach((card, i) => !(isOdd && i === center) && card.addEventListener("click", this.handleCardClick.bind(this)));

    return this;
  }

  drawFrame() {
    const container = document.getElementById("board");
    this.displayBoard(container).displayScore();
  }
}