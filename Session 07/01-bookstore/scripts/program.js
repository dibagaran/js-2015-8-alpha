$(function(){
  var loadBooks = function(categoryIndex){
    $('#books').empty();
    for (var i = 0; i < store.categories[categoryIndex].books.length; i++)
    {
      (function(){
        var book = store.categories[categoryIndex].books[i];
        var listItem = $('<li/>').appendTo('#books');
        $('<h4/>').text(book.title).appendTo(listItem);
        $('<h6/>').text(book.author).appendTo(listItem);
        $('<a href="#">Add to Wish List</a>').click(function(){
            if(store.wishList.indexOf(book) < 0)
            {
              store.wishList.push(book);
              $('<li/>').text(book.title).appendTo('#wish-list');
            }
            else {
              alert('This book is already in your wish list.')
            }
        }).appendTo(listItem);
      })();
    }
  };

  for (var i = 0; i < store.categories.length; i++)
    $('<option/>').text(store.categories[i].title).val(i).appendTo('#categories');

  loadBooks(0);

  $('#categories').change(function(e){
    loadBooks($(this).val());
  });
});
