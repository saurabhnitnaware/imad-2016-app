

//move bro 

var bro = document.getElementById('bro');
var marginLeft = 0;
function moveRight(){
    marginLeft += 5;
    bro.style.marginLeft = marginLeft + 'px';
}

bro.onclick = function(){
  var interval = setInterval(moveRight,70);
};

// incrementing counter by button
var counter = 0;    
var button = document.getElementById("but");
button.onclick = function(){
      /*
      var request = new XMLHttpRequest();
      
      request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE)
        {
            if(request.status == 200)
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    */
  counter = counter + 1;
  var span = document.getElementById("count");
  span.innerHTML = counter.toString();
  
  
 // request.open('GET','http://saurabhnitnaware.imad.hasura-app.io/counter',true);
 // request.send(null);
};

// 
var InputName = document.getElementById('name');
var nameF = InputName.value;
var but = document.getElementById('submitBtn');

but.onclick = function(){
  var names = ["Saurabh","Rahul","Sammer"];
  var list = '';
  for(var i=0;i<=names.length;i++)
  {
      list = '<li>'+names[i]+'</li>';
  }
  var ul = document.getElementById('uo');
  ul.innerHTML = list;
  
};









