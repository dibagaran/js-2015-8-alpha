window.onload = function(){
  var items = document.getElementById('items');
  var newItem = document.getElementById('new-item');
  document.getElementById('add-item').onclick = function(){
      if(newItem.value.trim() !== '')
        items.innerHTML += '<li>' + newItem.value + '</li>';
      else
        alert('New item cannot be empty.');
  };
};
