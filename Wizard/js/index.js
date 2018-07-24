$("#next-step").on("click", wNext);
$("#last-step").on("click", wLast);

function wNext() {
  wizard.next();
}

function wLast() {
  wizard.last();
}

var wizard = (function() {
  var index = 0,
      up = function() {
        $("#" + index).removeClass("active").addClass("passive");
        $("#" + (++index)).addClass("active");
      },
      down = function() {
        $("#" + index).removeClass("active")
        $("#" + (--index)).removeClass("passive").addClass("active");
      };
  return {
    next: function() {
      if (index < ($('.wizard').length-1)) up();
    },
    last: function() {
      if (index !== 0) down();
    }
  };
}());