var getHash = function() {
  var match = window.location.href.match(/#(.*)$/);
  if (match) {
    return match[1];
  } else {
    return null
  }
}

var update = function() {
  var hash = getHash();

  if (hash) {
    $('.content *').hide();
    var $title = $('#' + hash);
    $title.show()
    $title.nextUntil('h1').show()
  } else {
    window.location.replace("#issue-1");
    update();
  }
}

$(document).ready(function() {
  var $newToc = $('<div class="toc"></div>').html($('.toc').html());
  $('.toc').remove();
  $newToc.appendTo('body');

  $('li').click(update);
  update();
});
