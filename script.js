function Board(boardDiv){
    let board = []
    let winner = ''
    let turns = 0
    board.push(['_','_','_'])
    board.push(['_','_','_'])
    board.push(['_','_','_'])

    this.resetBoard = function(){
        console.log('Resetting Board')
        board = []
        winner = ''
        turns= 0
        board.push(['_','_','_'])
        board.push(['_','_','_'])
        board.push(['_','_','_'])
        myBoard.drawBoard(boardDiv)
        currentPlayer = playerOne
        toastDiv.innerText = currentPlayer.name
        toastDiv.removeEventListener('click',myBoard.resetBoard)
    }
    this.checkWins = function(){
        let threes = []
        threes[0]= board[0][0] + board[1][0] + board[2][0]
        threes[1]= board[0][1] + board[1][1] + board[2][1]
        threes[2]= board[0][2] + board[1][2] + board[2][2]
        threes[3]= board[0][0] + board[0][1] + board[0][2]
        threes[4]= board[1][0] + board[1][1] + board[1][2]
        threes[5]= board[2][0] + board[2][1] + board[2][2]
        threes[6]= board[0][0] + board[1][1] + board[2][2]
        threes[7]= board[2][0] + board[1][1] + board[0][2]
        
        threes.forEach(function (three) {
            if (three === 'xxx')
                winner = 'x'
            if (three === 'ooo')
                winner = 'o'
        })
        console.log(turns)
        
        if ((turns >=9)&&(winner === '')) {
            winner = 'nobody'
        }
        console.log(winner)




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
        if (winner ==''){
            turns+=1
            if (board[row][column] == '_'){
                board[row][column] = currentPlayer.marker
                switchPlayer()
            }
            switch (myBoard.checkWins()){
                case 'x':
                    toastDiv.innerText = "X WINS! (click this to reset)"
                    toastDiv.addEventListener('click',myBoard.resetBoard)
                    break;
                case 'o':
                    toastDiv.innerText = "O WINS! (click this to reset)"
                    toastDiv.addEventListener('click',myBoard.resetBoard)
                    break;
                case 'nobody':
                    toastDiv.innerText = "Tie game! (click this to reset)"
                    toastDiv.addEventListener('click',myBoard.resetBoard)
                    break;
            } 
        }else {
                myBoard.resetBoard
                myBoard.drawBoard
                currentPlayer = playerOne
                toastDiv.innerText = currentPlayer.name
            }
            
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
 toastDiv.innerText = currentPlayer.name
}
const playerOne ={
    name: "player X",
    marker: 'x'
}
const playerTwo = {
    name: "player O",
    marker: "o"
}

let currentPlayer = playerOne
toastDiv = document.querySelector('.toastDiv')
toastDiv.innerText = currentPlayer.name
myBoardDiv = document.querySelector('.boardDiv') 
let myBoard = new Board(myBoardDiv)
myBoard.drawBoard(myBoardDiv)
