const printBoard= board => {
  console.log(board.map(row => row.join(' | ')).join("\n"));
};
/*
let board =[
  [' ',' ',' '],
  [' ',' ',' '],
  [' ',' ',' ']
];

console.log(printBoard(board));
board[0][1]='1';
board[2][2]='B';

console.log(printBoard(board));
*/
const generatePlayerBoard = (numberOfRows,numberOfColumns) =>{
  let board=[];
  for (var i=0;i<numberOfRows;i++){
    let row=[];
    for (var j=0;j<numberOfColumns;j++){
      row.push(' ');
    };
    board.push(row);
  };
  return board;
};

generatePlayerBoard(4,5);

const generateBombBoard = (numberOfRows,numberOfColumns,numberOfBombs) => {
  let board=[];
  for (var i=0;i<numberOfRows;i++){
    let row=[];
    for (var j=0;j<numberOfColumns;j++){
      row.push(null);
    };
    board.push(row);
  };
  let numberOfBombsPlaced =0;
  while (numberOfBombsPlaced != numberOfBombs){
    let randomRowIndex=Math.floor(Math.random()*numberOfRows);
    let randomColumnIndex=Math.floor(Math.random()*numberOfColumns);
    board[randomRowIndex][randomColumnIndex]='B';
    numberOfBombsPlaced +=1;
    // We will use control flow to prevent duplicate bombs being created
  }

  return board;

};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,4);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ')
printBoard(bombBoard);
