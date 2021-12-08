function Board(boardDiv){
    let board = [['_','_','_'],['_','_','_'],['_','_','_']]
    let winner = ''
    let turns = 0

    let aiValues =[[0,0,0],[0,0,0][0,0,0]]

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
        
    }
    this.computerMove = function(){
        let bestMovePoints = -1
        let bestMoveX =''
        let bestMoveY=''
        for (let i=0;i<3;i++){
            for (let j=0;j<3;j++){
                if ((aiValues[i][j]> bestMovePoints)&&(board[i][j]=='_')){
                    bestMovePoints = aiValues[i][j]
                    bestMoveX = i
                    bestMoveY = j
                    console.log(`${bestMoveX} , ${bestMoveY} , value: ${aiValues[i][j]}`)
                }   

            }

        }
        console.log(`choosing ${bestMoveX} , ${bestMoveY}: ${currentPlayer.marker}`)
        myBoard.setCell(bestMoveX,bestMoveY,currentPlayer)
        myBoard.drawBoard(myBoardDiv)
        this.checkWins





    }
    this.checkWins = function(){
        aiValues = [[0,0,0],[0,0,0],[0,0,0]]
        let threes = []
        threes[0]= board[0][0] + board[1][0] + board[2][0]
        if (threes[0].indexOf('x') == -1) {
            aiValues[0][0]+=1
            aiValues[1][0]+=1
            aiValues[2][0]+=1
        } else {
            if (threes[0] ==='_xx'){
                aiValues[0][0]+= 5
            } else if (threes[0]==='x_x'){
                aiValues[1][0]+= 5
            } else if (threes[0]==='xx_'){
                aiValues[2][0]+= 5
            }
        }
        if (threes[0] ==='_oo'){
            aiValues[0][0]+= 11
        } else if (threes[0]==='o_o'){
            aiValues[1][0]+= 11
        } else if (threes[0]==='oo_'){
            aiValues[2][0]+= 11
        }
        threes[1]= board[0][1] + board[1][1] + board[2][1]
        if (threes[1].indexOf('x') == -1) {
            aiValues[0][1]+=1
            aiValues[1][1]+=1
            aiValues[2][1]+=1
        } else {
            if (threes[1] ==='_xx'){
                aiValues[0][1]+= 5
            } else if (threes[1]==='x_x'){
                aiValues[1][1]+= 5
            } else if (threes[1]==='xx_'){
                aiValues[2][1]+= 5
            }
        }
        if (threes[1] ==='_oo'){
            aiValues[0][1]+= 11
        } else if (threes[1]==='o_o'){
            aiValues[1][1]+= 11
        } else if (threes[1]==='oo_'){
            aiValues[2][1]+= 11
        }
        threes[2]= board[0][2] + board[1][2] + board[2][2]
        if (threes[2].indexOf('x') == -1) {
            aiValues[0][2]+=1
            aiValues[1][2]+=1
            aiValues[2][2]+=1
        } else {
            if (threes[2] ==='_xx'){
                aiValues[0][2]+= 5
            } else if (threes[2]==='x_x'){
                aiValues[1][2]+= 5
            } else if (threes[2]==='xx_'){
                aiValues[2][2]+= 5
            }
        }
        if (threes[2] ==='_oo'){
            aiValues[0][2]+= 11
        } else if (threes[2]==='o_o'){
            aiValues[1][2]+= 11
        } else if (threes[2]==='oo_'){
            aiValues[2][2]+= 11
        }
        threes[3]= board[0][0] + board[0][1] + board[0][2]
        if (threes[3].indexOf('x') == -1) {
            aiValues[0][0]+=1
            aiValues[0][1]+=1
            aiValues[0][2]+=1
        } else {
            if (threes[3] ==='_xx'){
                aiValues[0][0]+= 5
            } else if (threes[3]==='x_x'){
                aiValues[0][1]+= 5
            } else if (threes[3]==='xx_'){
                aiValues[0][2]+= 5
            }
        }
        if (threes[3] ==='_oo'){
            aiValues[0][0]+= 11
        } else if (threes[3]==='o_o'){
            aiValues[0][1]+= 11
        } else if (threes[3]==='oo_'){
            aiValues[0][2]+= 11
        }
        
        threes[4]= board[1][0] + board[1][1] + board[1][2]
        if (threes[4].indexOf('x') == -1) {
            aiValues[1][0]+=1
            aiValues[1][1]+=1
            aiValues[1][2]+=1
        } else {
            if (threes[4] ==='_xx'){
                aiValues[1][0]+= 5
            } else if (threes[4]==='x_x'){
                aiValues[1][1]+= 5
            } else if (threes[4]==='xx_'){
                aiValues[1][2]+= 5
            }
        }
        if (threes[4] ==='_oo'){
            aiValues[1][0]+= 11
        } else if (threes[4]==='o_o'){
            aiValues[1][1]+= 11
        } else if (threes[4]==='oo_'){
            aiValues[1][2]+= 11
        }
        threes[5]= board[2][0] + board[2][1] + board[2][2]
        if (threes[5].indexOf('x') == -1) {
            aiValues[2][0]+=1
            aiValues[2][1]+=1
            aiValues[2][2]+=1
        } else {
            if (threes[5] ==='_xx'){
                aiValues[2][0]+= 5
            } else if (threes[5]==='x_x'){
                aiValues[2][1]+= 5
            } else if (threes[5]==='xx_'){
                aiValues[2][2]+= 5
            }
        }
        if (threes[5] ==='_oo'){
            aiValues[2][0]+= 11
        } else if (threes[5]==='o_o'){
            aiValues[2][1]+= 11
        } else if (threes[5]==='oo_'){
            aiValues[2][2]+= 11
        }
        threes[6]= board[0][0] + board[1][1] + board[2][2]
        if (threes[6].indexOf('x') == -1) {
            aiValues[0][0]+=1
            aiValues[1][1]+=1
            aiValues[2][2]+=1
        } else {
            if (threes[6] ==='_xx'){
                aiValues[0][0]+= 5
            } else if (threes[6]==='x_x'){
                aiValues[1][1]+= 5
            } else if (threes[6]==='xx_'){
                aiValues[2][2]+= 5
            }
        }
        if (threes[6] ==='_oo'){
            aiValues[0][0]+= 11
        } else if (threes[6]==='o_o'){
            aiValues[1][1]+= 11
        } else if (threes[6]==='oo_'){
            aiValues[2][2]+= 11
        }
        threes[7]= board[2][0] + board[1][1] + board[0][2]
        if (threes[7].indexOf('x') == -1) {
            aiValues[2][0]+=1
            aiValues[1][1]+=1
            aiValues[0][2]+=1
        } else {
            if (threes[7] ==='_xx'){
                aiValues[2][0]+= 5
            } else if (threes[7]==='x_x'){
                aiValues[1][1]+= 5
            } else if (threes[7]==='xx_'){
                aiValues[0][2]+= 5
            }
        }
        if (threes[7] ==='_oo'){
            aiValues[2][0]+= 11
        } else if (threes[7]==='o_o'){
            aiValues[1][1]+= 11
        } else if (threes[7]==='oo_'){
            aiValues[0][2]+= 11
        }
        console.table(aiValues)
        
        threes.forEach(function (three) {
            if (three === 'xxx')
                winner = 'x'
            if (three === 'ooo')
                winner = 'o'
        })
        console.log(`${turns} turns elapsed`)
        
        if ((turns >=9)&&(winner === '')) {
            winner = 'nobody'
        }




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
                case playerOne.marker:
                    toastDiv.innerText = `${playerOne.name} WINS!`
                    console.log('p1 wins')
                    break;
                case playerTwo.marker:
                    toastDiv.innerText = `${playerTwo.name} WINS!`
                    console.log('computer wins')
                    break;
                case 'nobody':
                    toastDiv.innerText = "Tie game!"
                    break;
            } 
        }else {
                myBoard.resetBoard
                myBoard.drawBoard
                
                
            }
            
        }
}

function cellClicked (){
    if (currentPlayer == playerOne){
        myBoard.setCell(this.getAttribute('data-row'),
            this.getAttribute('data-column'),
            currentPlayer
            )

        console.log('switching player')
        myBoard.drawBoard(myBoardDiv)
            setTimeout(myBoard.computerMove,2000)
    }

}
function switchPlayer(){

 currentPlayer = (currentPlayer=== playerOne)? playerTwo:playerOne
 toastDiv.innerText = `${currentPlayer.name}'s turn!`
console.log(`switched to ${currentPlayer.name}`)
}
const playerOne ={
    name: "player X",
    marker: 'x'
}
const playerTwo = {
    name: "Computer",
    marker: "o"
}

let currentPlayer = playerOne
let toastDiv = document.querySelector('.toastDiv')
toastDiv.innerText = `${currentPlayer.name}'s turn!`
myBoardDiv = document.querySelector('.boardDiv') 
let myBoard = new Board(myBoardDiv)
let resetDiv = document.querySelector('.resetDiv')
resetDiv.addEventListener('click',myBoard.resetBoard)
myBoard.drawBoard(myBoardDiv)
myBoard.checkWins()