const TicTacToe = (()=>{
    const container = document.querySelector("#container")
    const restartBtn = document.querySelector("#restart")
    const startGame = document.querySelector("#start")
    const winDisplay = document.querySelector("#win")
    const firstPlayerInput = document.querySelector("#player1")
    const secondPlayerInput = document.querySelector("#player2")
    const firstPlayerScore = document.querySelector("#score1")
    const secondPlayerScore = document.querySelector("#score2")
    const resetScore = document.querySelector("#reset")

    Player1Score = 0
    Player2Score = 0

    function displayScore(){
    firstPlayerScore.textContent = Player1Score
    secondPlayerScore.textContent = Player2Score
    }

    resetScore.addEventListener("click", function(){
        Player1Score = 0
        Player2Score = 0
        displayScore()
    })

    whosTurn = 0
    gamePlay = false

    const player = (name, sign) =>{
        return{
            name, sign
        }
    }
    const player1 = player(firstPlayerInput.value, "X")
    const player2 = player(secondPlayerInput.value, "O")

    startGame.addEventListener("click", function(){
        gamePlay = true
    })
        const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8]

            const drawFunction = ()=>{tiles.forEach(tile => {
                let specifik = tiles.indexOf(tile)
                let square = document.createElement("div")
                container.appendChild(square) 


                const chooseTile = ()=>{
                    if (!square.textContent && gamePlay){
                        if(whosTurn % 2 == 0){
                            square.textContent = player1.sign
                            tiles[specifik] = player1.sign
                        }else{
                            square.textContent = player2.sign
                            tiles[specifik] = player2.sign
                        }
                    WhoWin(tiles, specifik, secondPlayerInput.value, firstPlayerInput.value)    
                    whosTurn++}
                    }
    
                   square.addEventListener("click", chooseTile)
     
                restartBtn.addEventListener("click", function(){
                 tiles.forEach(tile => {
                     tiles[specifik] = specifik
                     square.textContent = ""
                     whosTurn = 0
                     gamePlay = true
                 })
                }) 
        })

    }
    drawFunction()

        function WhoWin (tiles, specifik, player2, player1){
            if(tiles[0] == tiles[1] && tiles[0] == tiles[2] ||  tiles[3] == tiles[4] && tiles[3] == tiles[5] || tiles[6] == tiles[7] && tiles[6] == tiles[8] ||
               tiles[0] == tiles[3] && tiles[0] == tiles[6] ||  tiles[1] == tiles[4] && tiles[1] == tiles[7] || tiles[2] == tiles[5] && tiles[2] == tiles[8] ||
               tiles[0] == tiles[4] && tiles[0] == tiles[8] ||  tiles[2] == tiles[4] && tiles[2] == tiles[6]
            ){
                if(tiles[specifik] == "X"){
                    Player1Score += 1
                    displayScore()
                    winDisplay.textContent = `${player1} wins`
                }else{
                    Player2Score += 1
                    displayScore()
                    winDisplay.textContent = `${player2} wins`
                }
                gamePlay = false
            }else if(whosTurn == 8){
                winDisplay.textContent = "draw" 
                whosTurn = 0
                gamePlay = false
            }
        }

})();
