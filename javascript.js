const TicTacToe = (()=>{
    const container = document.querySelector("#container")
    let whosTurn = 0

    const gameBoard = (()=>{
        const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        tiles.forEach(tile => {
           let specifik = tiles.indexOf(tile)
           let square = document.createElement("div")
           container.appendChild(square)    
            
            const chooseTile = ()=>{
            if (!square.textContent){
                if(whosTurn % 2 == 0){
                    square.textContent = player1.sign
                    tiles[specifik] = player1.sign
                    console.log(tiles)
                }else{
                    square.textContent = player2.sign
                    tiles[specifik] = player2.sign
                    console.log(tiles)
                }
            whosTurn++}
        }

           square.addEventListener("click", chooseTile)
        });
    })();

    const player = (name, sign) =>{
        return{
            name, sign
        }
    }

    const player1 = player("wilmer", "X")
    const player2 = player("Erik", "O")

})();
