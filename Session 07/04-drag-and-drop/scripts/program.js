$(function(){
  var target = $('#target'),
      width = target.width(),
      height = target.height(),
      x = ($(window).width() - width)/2,
      y = ($(window).height() - height)/2,
      offsetX, offsetY;

  var update = function(){
    target.css({
      left: x,
      top: y
    });
  }

  target.mousedown(function(e){
    e.preventDefault();

    offsetX = e.pageX - $(this).offset().left;
    offsetY = e.pageY - $(this).offset().top;

    $(this).addClass('ghost');

    $(document).mousemove(function(e){
      x = e.pageX - offsetX;
      y = e.pageY - offsetY;
      update();
    });

    $(document).mouseup(function(){
      target.removeClass('ghost');
      $(document).off('mousemove');
      $(document).off('mouseup');
    });
  });

  update();
});
