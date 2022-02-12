const player_x = `X`;
const player_o = `O`;
var turn = 0;


var tileElements = document.getElementsByClassName('tile');
for (var i = 0; i < tileElements.length; i++) {
    tileElements[i].addEventListener('click', function () {
        if (this.innerHTML == '') {
            if (turn == 0) {
                this.innerHTML = player_x;
                turn = 1;
            } else {
                this.innerHTML = player_o;
                turn = 0;
            }
        }   
    });
}

