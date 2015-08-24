$(function(){
  $(':text:first').focus();
  $('button:first').click(function(){
    var title = $(':text:first').val().trim();
    if(title !== '')
      $('<li></li>').text(title).click(function(){
        $(this).toggleClass('done');
      }).appendTo('ul:first');
    $(':text:first').val('').focus();
  });
});
