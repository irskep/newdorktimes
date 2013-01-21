$(document).ready(function() {
  var $newToc = $('<div class="toc"></div>').html($('.toc').html());
  $('.toc').remove();
  $newToc.appendTo('body');
});
