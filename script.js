var getHash = function() {
  var match = window.location.href.match(/#(.*)$/);
  if (match) {
    return match[1];
  } else {
    return null
  }
};

var getRealHash = function(rawHash) {
  var node = $('#' + rawHash).get(0);
  if (node.nodeName === 'H1') {
    return rawHash;
  } else {
    return $(node).prevUntil('h1').prev('h1').get(0).id;
  }
};

var update = function() {
  var rawHash = getHash();

  if (rawHash) {
    var hash = getRealHash(rawHash);
    $('.content *').hide();
    var $title = $('#' + hash);
    $title.show()
    $title.nextUntil('h1').show()
  } else {
    window.location.replace("#issue-1");
    update();
  }
};

$(document).ready(function() {
  var $newToc = $('<div class="toc"></div>').html($('.toc').html());
  $('.toc').remove();
  $newToc.appendTo('body');

  $('li').click(update);
  update();
});
