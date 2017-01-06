var getDoctors = require('./../js/getDoctors.js').getDoctors;

$(document).ready(function() {
  $("#submit").click(function() {
    ailmentInput = $("#ailmentInput");
    getDoctors(ailmentInput);
  });


});
