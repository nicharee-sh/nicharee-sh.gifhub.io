//Pre-exam Javascript
class Docdrop {
    constructor() {
      this.board = [
        ['⁌', '•', '•'],
        ['•', '○', '•'],
        ['•', '•', '⦾'],
      ];
      this.nextPosition = [0, 0];
      this.currentPosition = [0, 0]; // (x, y)
    }
  
    moveRight() {
      if (this.currentPosition[0] < this.board[0].length - 1) {
        this.nextPosition[0]++;
        this.updatePosition();
      }
    }
    moveLeft() {
      if (this.currentPosition[0] > 0) {
        this.nextPosition[0]--;
        this.updatePosition();
      }
    }
    moveUp() {
      if (this.currentPosition[1] > 0) {
        this.nextPosition[1]--;
        this.updatePosition();
      }
    }
  
    moveDown() {
      if (this.currentPosition[1] < this.board.length - 1) {
        this.nextPosition[1]++;
        this.updatePosition();
      }
    }
  
    updatePosition() {
      if (this.board[this.nextPosition[1]][this.nextPosition[0]] === '•') {
        this.board[this.currentPosition[1]][this.currentPosition[0]] = '•';
        this.board[this.nextPosition[1]][this.nextPosition[0]] = '⁌';
        const [x, y] = this.nextPosition;
        this.currentPosition = [x, y];
      }
      if (this.board[this.nextPosition[1]][this.nextPosition[0]] === '⦾') {
        throw Error('You are Dead');
      } else {
        const [x, y] = this.currentPosition;
        this.nextPosition = [x, y];
      }
    }
  
    printBoard() {
      console.log(this.board.map((d) => d.join('')).join('\n'));
    }
  }
  const docdrop = new Docdrop();
  docdrop.printBoard();
  while (true) {
    const control = prompt('');
    console.clear();
    try {
      switch (control) {
        case 'l':
          docdrop.moveLeft();
          break;
        case 'r':
          docdrop.moveRight();
          break;
        case 'u':
          docdrop.moveUp();
          break;
        case 'd':
          docdrop.moveDown();
          break;
      }
      docdrop.printBoard();
    } catch (e) {
      console.log(e);
      break;
    }
  }
  