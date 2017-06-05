//tubebox plugin that opens youtube videos into theater mode type modal thing
//reverse plugin
$.fn.reverse = function () {
  this.text(function () {
    var oldTxt = $(this).text();
    var revTxt = "";
    for (var i = oldTxt.length - 1; i >= 0; i--) {
      revTxt += oldTxt[i];
    }
    return revTxt;
  })
}
$('li').reverse();
//reverse plugin2
$.fn.reverse = function (keepCase) {
  this.text(function (keepCase) {
    var oldTxt = $(this).text();
    var revTxt = "";
    for (var i = oldTxt.length - 1; i >= 0; i--) {
      revTxt += oldTxt[i];
      if (keepCase == true) {
        if (oldTxt.charAt(i).toUpperCase() == oldTxt.charAt(i) ) {
          revTxt.charAt(i).toUpperCase();
        }
      }
    }
    console.log(oldTxt);
    return revTxt;
  });
}
$('li').reverse(true);
