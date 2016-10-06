alert('Loaded!');

//move bro 

var bro = document.getElementById('bro');

function moveRight(){
    marginLeft += 10;
    bro.style.marginLeft = marginLeft + 'px';
}

bro.onclick = function(){
  var interval = setInterval(moveRight,200);
};