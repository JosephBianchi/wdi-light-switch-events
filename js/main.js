var text = document.querySelector('.status')
var bodyLight = document.querySelector('body')
bodyLight.style.backgroundColor = '#DBF3DF'

var button = document.querySelector('button')
button.addEventListener('click', function(){
 if (button.className === 'switch on'){
  button.className = 'switch off';
  bodyLight.style.backgroundColor = 'black';
  text.innerText = "Night Time";
  text.style.color = 'white';
  }

  else if (button.className === 'switch off') {
    button.className = 'switch on';
    bodyLight.style.backgroundColor = '#DBF3DF';
    text.innerHTML = "Day Time";
    text.style.color = 'black';
  }

});
