$(function(){
  $(':text').keypress(function(e){
    if(e.which < 48 || e.which > 57)
      e.preventDefault();
  });
});
