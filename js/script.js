$(document).ready(function () {

});
// what does this function do, again?

let $input;
// Why declare "input?"

$('#add-skill').on('click', function () {
  // Change delete button into tiny red 'x' button
  $input = $('#input-skill').val();
  const $newLi = $(`<div id="li-div"><button class="tiny-box">X</button> <li>${$input}</li></div>`);
  $('ul').append($newLi);
  $('#input-skill').val('');
  $('.tiny-box').on('click', function () {
  $(this).closest('div').remove()
  })
  //.append(deleteButton) to list item;
});

// $('#add-skill').on('click', 'deleteButton', function (evt) {
//   $(evt.target).fadeOut(1000, function () {
//     $(this).remove();
//   });
// });

// remove skill from list one at a time
  // when item box is clicked
  // remove item from list 


