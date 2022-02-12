const player_x = `X`;
const player_o = `O`;
var turn = 0;





function getEntry(player, index) {
    let tile1 = document.getElementById("tile-1").innerHTML;
    let tile2 = document.getElementById("tile-2").innerHTML;
    let tile3 = document.getElementById("tile-3").innerHTML;
    let tile4 = document.getElementById("tile-4").innerHTML;
    let tile5 = document.getElementById("tile-5").innerHTML;
    let tile6 = document.getElementById("tile-6").innerHTML;
    let tile7 = document.getElementById("tile-7").innerHTML;
    let tile8 = document.getElementById("tile-8").innerHTML;
    let tile9 = document.getElementById("tile-9").innerHTML;



    if (((tile1 == player) && (tile2 == player) && (tile3 == player)) ||             // 1
        (tile1 == player) && (tile4 == player) && (tile7 == player) ||
        (tile1 == player) && (tile5 == player) && (tile9 == player)) {
        let alertWin = document.getElementById(`which-player-win`);
        alertWin.innerHTML = "Winner is " + player;
    } else if (((tile2 == player) && (tile1 == player) && (tile3 == player)) ||        // 2
        (tile2 == player) && (tile5 == player) && (tile8 == player)) {
        let alertWin = document.getElementById(`which-player-win`);
        alertWin.innerHTML = "Winner is " + player;
    } else if (((tile3 == player) && (tile1 == player) && (tile2 == player)) ||         // 3
        (tile3 == player) && (tile6 == player) && (tile9 == player)||
        (tile3 == player) && (tile5 == player) && (tile7 == player)) {
        let alertWin = document.getElementById(`which-player-win`);
        alertWin.innerHTML = "Winner is " + player;
    } else if (((tile4 == player) && (tile1 == player) && (tile7 == player)) ||         // 4
        (tile4 == player) && (tile5 == player) && (tile6 == player)) {
        let alertWin = document.getElementById(`which-player-win`);
        alertWin.innerHTML = "Winner is " + player;
    } else if (((tile5 == player) && (tile2 == player) && (tile8 == player)) ||          // 5 
        (tile5 == player) && (tile4 == player) && (tile6 == player) ||
        (tile5 == player) && (tile3 == player) && (tile7 == player) ||
        (tile5 == player) && (tile1 == player) && (tile9 == player)) {
        let alertWin = document.getElementById(`which-player-win`);
        alertWin.innerHTML = "Winner is " + player;
    } else if (((tile6 == player) && (tile3 == player) && (tile9 == player)) ||           // 6
        (tile6 == player) && (tile4 == player) && (tile5 == player)) {
        let alertWin = document.getElementById(`which-player-win`);
        alertWin.innerHTML = "Winner is " + player;
    } else if (((tile7 == player) && (tile1 == player) && (tile4 == player)) ||           // 7 
        (tile7 == player) && (tile5 == player) && (tile3 == player) ||
        (tile7 == player) && (tile8 == player) && (tile9 == player)) {
        let alertWin = document.getElementById(`which-player-win`);
        alertWin.innerHTML = "Winner is " + player;
    } else if (((tile8 == player) && (tile2 == player) && (tile5 == player)) ||                    // 8
        (tile8 == player) && (tile9 == player) && (tile7 == player)) {
        let alertWin = document.getElementById(`which-player-win`);
        alertWin.innerHTML = "Winner is " + player;
    } else if (((tile9 == player) && (tile6 == player) && (tile3 == player)) ||                       // 9
        (tile9 == player) && (tile8 == player) && (tile7 == player) ||
        (tile9 == player) && (tile5 == player) && (tile1 == player)) {
        let alertWin = document.getElementById(`which-player-win`);
        alertWin.innerHTML = "Winner is " + player;
    }
}


var tileElements = document.getElementsByClassName('tile');
for (var i = 0; i < tileElements.length; i++) {
    tileElements[i].addEventListener('click', function () {
        if (this.innerHTML == '') {
            if (turn == 0) {
                this.innerHTML = player_x;
                getEntry(player_x);
                turn = 1;
            } else {
                this.innerHTML = player_o;
                getEntry(player_o);
                turn = 0;
            }
        }
    });
}