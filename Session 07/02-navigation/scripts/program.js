$(function(){
  var speed = 25;
  var x = ($(window).width() - $('#target').width())/2;
  var y = ($(window).height() - $('#target').height())/2;

  var update = function(){
    $('#target').css({
      left: x,
      top: y
    });
  }

  update();

  $(document).keydown(function(e){
    switch(e.which)
    {
      case 37: //Left Arrow Key
      x -= speed;
      update();
      break;
      case 38: //Up Arrow Key
      y -= speed;
      update();
      break;
      case 39: //Right Arrow Key
      x += speed;
      update();
      break;
      case 40: //Down Arrow Key
      y += speed;
      update();
      break;
    }
  });
});
