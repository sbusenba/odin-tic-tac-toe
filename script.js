function Board(boardDiv){
    const board = []
    board.push(['_','_','_'])
    board.push(['_','_','_'])
    board.push(['_','_','_'])

    console.table(board)

    this.checkWins = function(){
        let threes = []
        threes[0]= board[0][0] + board[0][1] + board[0][2]
        threes[1]= board[1][0] + board[1][1] + board[1][2]
        threes[2]= board[2][0] + board[2][1] + board[2][2]
        threes[3]= board[0][0] + board[1][0] + board[2][0]
        threes[4]= board[0][1] + board[2][1] + board[0][2]
        threes[5]= board[0][2] + board[0][2] + board[0][2]
        threes[6]= board[0][0] + board[1][1] + board[2][2]
        threes[7]= board[2][0] + board[1][1] + board[0][2]
        let winner = ''
        threes.forEach(function (three) {
            console.log(three)
            if (three === 'xxx')
                winner = 'x'
            if (three === 'ooo')
                winner = 'o'
        })
        return winner
    }
    this.drawBoard = function(boardDiv){
        boardDiv.innerHTML = ''
        for(rowNum=0;rowNum<3;rowNum++){
            let row = document.createElement('div')
            row.classList.add('row')
            for(let columnNum=0;columnNum<3;columnNum++){
                let cell= document.createElement('div')
                cell.classList.add('cell')
                cell.setAttribute('data-row',rowNum)
                cell.setAttribute('data-column',columnNum)
                cell.addEventListener('click',cellClicked)
                cell.innerText = board[rowNum][columnNum]
                row.appendChild(cell)
    
            }
            boardDiv.appendChild(row)
        }
    }
    this.setCell = function(row,column,currentPlayer){
        if (board[row][column] == '_'){
            board[row][column] = currentPlayer.marker
            switchPlayer()
        }
        console.table(board)
        console.log(myBoard.checkWins())
        
    }
}
function cellClicked (){
console.log(`${this.getAttribute('data-row')} ,${this.getAttribute('data-column')}`)
    myBoard.setCell(this.getAttribute('data-row'),
        this.getAttribute('data-column'),
        currentPlayer
        )
    myBoard.drawBoard(myBoardDiv)
    

}
function switchPlayer(){
 currentPlayer = (currentPlayer=== playerOne)? playerTwo:playerOne
}
const playerOne ={
    name: "player1",
    marker: 'x'
}
const playerTwo = {
    name: "player2",
    marker: "o"
}
let currentPlayer = playerOne


myBoardDiv = document.querySelector('.boardDiv') 
let myBoard = new Board(myBoardDiv)
myBoard.drawBoard(myBoardDiv)
console.log(myBoard.checkWins())