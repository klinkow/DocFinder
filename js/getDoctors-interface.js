var getDoctors = require('./../js/getDoctors.js').getDoctors;

$(document).ready(function() {
  $("#submit").click(function() {
    ailmentInput = $("#ailmentInput").val();
    function Doctor(name, bio, distance, location) {
      this.name = name;
      this.bio = bio;
      this.distance = distance;
      this.location = location;
    }
    getDoctors(ailmentInput);
  });
});
