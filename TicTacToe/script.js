//game button
var restart = document.querySelector("#bt");







//grab square
var squares = document.querySelectorAll('td');





//clear square
function clearBoard(){
  for (var i = 0; i <squares.length; i++) {
    squares[i].textContent ='';
  }
}


restart.addEventListener('click',clearBoard);



//check markerr

function changeMarker(){
  if (this.textContent==='') {
    this.textContent='X';

  }else if (this.textContent==='X') {
    this.textContent='O';

  }else {
    this.textContent='';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker)
}

//event listners
