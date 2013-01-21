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
    var $h1 = $(node).prev('h1');
    if ($h1.length == 0) {
      $h1 = $(node).prevUntil('h1').prev('h1');
    }
    return $h1.get(0).id;
  }
};

var update = function() {
  $('.active').removeClass('active');
  var rawHash = getHash();
  if (!rawHash) {
    rawHash = 'issue-1';
  }

  var hash = getRealHash(rawHash);
  $('.content *').hide();
  var $title = $('#' + hash);
  $title.show();
  $shouldShow = $title.nextUntil('h1');
  $shouldShow.show();
  $shouldShow.find(':hidden').show();
  $('[href=#' + hash + ']').parent().addClass('active');
};

var deferUpdate = function() {
  setTimeout(update, 0);
};

$(document).ready(function() {
  var $newToc = $('<div class="toc"></div>').html($('.toc').html());
  $('.toc').remove();
  $newToc.appendTo('body');

  $('li').click(deferUpdate);
  update();
});
