

//move bro 

var bro = document.getElementById('bro');
var marginLeft = 0;
function moveRight(){
    marginLeft += 10;
    bro.style.marginLeft = marginLeft + 'px';
}

bro.onclick = function(){
  var interval = setInterval(moveRight,1000);
};