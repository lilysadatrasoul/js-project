const player_x = `X`;
const player_o = `O`;
let turn = 0;
let finished = false;





function getEntry(player) {
    let tile1 = document.getElementById("tile-1").innerHTML;
    let tile2 = document.getElementById("tile-2").innerHTML;
    let tile3 = document.getElementById("tile-3").innerHTML;
    let tile4 = document.getElementById("tile-4").innerHTML;
    let tile5 = document.getElementById("tile-5").innerHTML;
    let tile6 = document.getElementById("tile-6").innerHTML;
    let tile7 = document.getElementById("tile-7").innerHTML;
    let tile8 = document.getElementById("tile-8").innerHTML;
    let tile9 = document.getElementById("tile-9").innerHTML;


    if (((tile1 == player) && (tile2 == player) && (tile3 == player)) ||                            // 1
        (tile1 == player) && (tile4 == player) && (tile7 == player) ||
        (tile1 == player) && (tile5 == player) && (tile9 == player)) {
            return true;
    } else if (((tile2 == player) && (tile1 == player) && (tile3 == player)) ||                       // 2
        (tile2 == player) && (tile5 == player) && (tile8 == player)) {
            return true;
    } else if (((tile3 == player) && (tile1 == player) && (tile2 == player)) ||                       // 3
        (tile3 == player) && (tile6 == player) && (tile9 == player) ||
        (tile3 == player) && (tile5 == player) && (tile7 == player)) {
            return true;
    } else if (((tile4 == player) && (tile1 == player) && (tile7 == player)) ||                       // 4
        (tile4 == player) && (tile5 == player) && (tile6 == player)) {
            return true;
    } else if (((tile5 == player) && (tile2 == player) && (tile8 == player)) ||                      // 5 
        (tile5 == player) && (tile4 == player) && (tile6 == player) ||
        (tile5 == player) && (tile3 == player) && (tile7 == player) ||
        (tile5 == player) && (tile1 == player) && (tile9 == player)) {
            return true;
    } else if (((tile6 == player) && (tile3 == player) && (tile9 == player)) ||                      // 6
        (tile6 == player) && (tile4 == player) && (tile5 == player)) {
            return true;
    } else if (((tile7 == player) && (tile1 == player) && (tile4 == player)) ||                     // 7 
        (tile7 == player) && (tile5 == player) && (tile3 == player) ||
        (tile7 == player) && (tile8 == player) && (tile9 == player)) {
            return true;
    } else if (((tile8 == player) && (tile2 == player) && (tile5 == player)) ||                      // 8
        (tile8 == player) && (tile9 == player) && (tile7 == player)) {
            return true;
    } else if (((tile9 == player) && (tile6 == player) && (tile3 == player)) ||                       // 9
        (tile9 == player) && (tile8 == player) && (tile7 == player) ||
        (tile9 == player) && (tile5 == player) && (tile1 == player)) {
            return true;
    }

    return false;
}


let tileElements = document.getElementsByClassName('tile');
for (var i = 0; i < tileElements.length; i++) {
    tileElements[i].addEventListener('click', function () {
        if (finished==false) {
            if (this.innerHTML == '') {
                if (turn == 0) {
                    this.innerHTML = player_x;
                    if(getEntry(player_x)){
                        let alertWin = document.getElementById(`which-player-win`);
                        alertWin.innerHTML = "Winner is " + " " + player_x;
                        finished = true;
                    }
                    turn = 1;

                } else {
                    this.innerHTML = player_o;
                    if(getEntry(player_o)){
                        let alertWin = document.getElementById(`which-player-win`);
                        alertWin.innerHTML = "Winner is " + " " + player_o;
                        finished = true;
                    }
                    turn = 0;
                }
            }
        }
    });
}
let alertWin = document.getElementById(`which-player-win`);
let palyAgain=document.getElementById('play_again');
    palyAgain.addEventListener('click', () => {
        for (let i = 0; i < tileElements.length; i++) {
        tileElements[i].innerHTML=''
        alertWin.innerHTML=''
          }
          finished=false;
        });
       
  