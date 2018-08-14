$("#importUsers").hide();

var wizard = (function() {
  var index = 0,
      steps = $('.wizard').length-1,
      up = function() {
        $("#" + index).removeClass("active").addClass("passive");
        $("#" + (++index)).addClass("active");
      },
      down = function() {
        $("#" + index).removeClass("active");
        $("#" + (--index)).removeClass("passive").addClass("active");
      };
  return {
    next: function() {
      if (index < steps) up();
      },
    prev: function() {
      if (index !== 0) down();
    }
  };
}());
$("#next-step").on("click", wizard.next);
$("#last-step").on("click", wizard.prev);