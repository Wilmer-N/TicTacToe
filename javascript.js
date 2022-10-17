const TicTacToe = (()=>{
    const container = document.querySelector("#container")
    const restartBtn = document.querySelector("button")
    let whosTurn = 0
    gamePlay = true
        const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8]

            const drawFunction = ()=>{ tiles.forEach(tile => {
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
                    WhoWin(tiles, specifik)    
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
                
            })}

            drawFunction()

        function WhoWin (tiles, specifik){
            if(tiles[0] == tiles[1] && tiles[0] == tiles[2] ||  tiles[3] == tiles[4] && tiles[3] == tiles[5] || tiles[6] == tiles[7] && tiles[6] == tiles[8] ||
               tiles[0] == tiles[3] && tiles[0] == tiles[6] ||  tiles[1] == tiles[4] && tiles[1] == tiles[7] || tiles[2] == tiles[5] && tiles[2] == tiles[8] ||
               tiles[0] == tiles[4] && tiles[0] == tiles[8] ||  tiles[2] == tiles[4] && tiles[2] == tiles[6]
            ){
                console.log(`${tiles[specifik]} wins`)
                gamePlay = false
            }else if(whosTurn == 8){
                console.log("draw")
                whosTurn = 0
                gamePlay = false
            }
        }

    const player = (name, sign) =>{
        return{
            name, sign
        }
    }

    const player1 = player("wilmer", "X")
    const player2 = player("Erik", "O")
})();
