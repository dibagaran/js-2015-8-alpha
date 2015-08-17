window.onload = function(){
  var y = 0;
  var stage = document.getElementById('stage');
  setInterval(function(){
    y = (y + 1) % 256;
    stage.style.backgroundPosition = '0 ' + y + 'px';
  }, 10);
};
