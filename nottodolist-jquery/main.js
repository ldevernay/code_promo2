$(document).ready(function() {
  var count = 0;
  console.log('tout va bien');
  $('#send').click(function() {
    var value = $('#todo').val();
    var current_todo = $('<div class="todo-item">' + value + '</div>');
    var delete_button = $('<button>Delete</button>');
    delete_button.click(function() {
      $(this)
        .closest('div')
        .remove();
    });
    current_todo
      .click(function() {
        $(this).toggleClass('checkbox-line-through');
      })
      .append(delete_button);
    current_todo.attr('id', count++);
    $('#todo-list').append(current_todo);

    $('#todo').val('');
  });
});
