$(function() {
    var $target = $('#content');
    $("body").mousewheel(function(event, delta) {
      $target.scrollTop($target.scrollTop() - (delta * 30));
      event.preventDefault();
   });
});