window.onload = function(){
  var clock, running = false, deciseconds = 0;

  var time = document.getElementById('time');
  var secondHand = document.getElementById('second-hand');

  var pad = function(number){
    return number < 10 ? '0' + number : number;
  };

  var updateTime = function(){
    var angle = (deciseconds * 6) % 360;
    secondHand.style.mozTransform = 'rotate(' + angle + 'deg)';
    secondHand.style.webkitTransform = 'rotate(' + angle + 'deg)';
    secondHand.style.transform = 'rotate(' + angle + 'deg)';

    var totalSeconds = Math.floor(deciseconds / 10);
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds / 60) % 60);
    var seconds = totalSeconds % 60;

    time.innerHTML = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  };

  document.getElementById('start-stop').onclick = function(){
    if(!running)
      clock = setInterval(function(){
        deciseconds++;
        updateTime();
      }, 100);
    else
      clearInterval(clock);

    running = !running;
  };

  document.getElementById('reset').onclick = function(){
    clearInterval(clock);
    running = false;
    deciseconds = 0;
    updateTime();
  };
};
