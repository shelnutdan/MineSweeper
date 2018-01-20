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
    if (board[randomRowIndex][randomColumnIndex] !== 'B'){
      board[randomRowIndex][randomColumnIndex]='B';
      numberOfBombsPlaced +=1;
    }
    /*board[randomRowIndex][randomColumnIndex]='B';
    numberOfBombsPlaced +=1;*/
    // We will use control flow to prevent duplicate bombs being created
  }

  return board;

};

const getNumberOfNeighborBombs = (bombBoard,rowIndex,columnIndex)=>{
  const neighborOffsets=[
  [-1,-1]
  ,[-1,0]
  ,[-1,1]
  ,[0,-1]
  ,[0,1]
  ,[1,-1]
  ,[1,0]
  ,[1,1]];
  const numberOfRows=bombBoard.length;
  const numberOfColumns=bombBoard[0].length;
  let numberOfBombs=0;
  neighborOffsets.forEach(offset =>{
    const neighborRowIndex= rowIndex+offset[0];
    const neighborColumnIndex= columnIndex+offset[1];
    if (neighborRowIndex >=0 && neighborRowIndex < numberOfRows && neighborColumnIndex >=0
      && neighborColumnIndex < numberOfColumns){
      if(bombBoard[neighborRowIndex][neighborColumnIndex] == 'B'){
        numberOfBombs +=1;
      }
    }
    return numberOfBombs;
  });
};

const flipTile =(playerBoard,bombBoard,rowIndex,columnIndex) =>{
  if (playerBoard[rowIndex][columnIndex] !== ' '){
    console.log("This tile has already been flipped!");
    return;
  }else if (bombBoard[rowIndex][columnIndex] == 'B'){
    playerBoard[rowIndex][columnIndex]=='B';
  }else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);

  }
};


let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,4);



console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ')
printBoard(bombBoard);

flipTile(playerBoard,bombBoard,1,1);
console.log('Updated player Board');
printBoard(playerBoard);
