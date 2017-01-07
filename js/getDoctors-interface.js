var getDoctors = require('./../js/getDoctors.js').getDoctors;
var googleApiKey = require('./../.env').googleApiKey;

var displayDoctors = function(doctors) {
  doctors.forEach(function(doctor) {
    $('#doctorList').append("<h5>" + doctor.name + "</h5> (" + doctor.distance + " miles away)<br>" + doctor.bio + "<br><br><br><div id='map"+doctors.indexOf(doctor)+"'><div><br><br><br><br>");

    function initMap() {
      $.ajax({
        url: 'https://maps.googleapis.com/maps/api/js?key=' + googleApiKey,
        dataType: "script"
      }).done(function() {
        docLoc = eval('({' + doctor.location + '})');
        var map = new google.maps.Map(document.getElementById("map".concat(doctors.indexOf(doctor))), {
          zoom: 15,
          center: docLoc,
          mapTypeId : google.maps.MapTypeId.ROADMAP
        });
      });
    }

    initMap();
  });
};

$(document).ready(function() {
  $("#submit").click(function() {
    ailmentInput = $("#ailmentInput").val();
    function Doctor(name, bio, distance, location) {
      this.name = name;
      this.bio = bio;
      this.distance = distance;
      this.location = location;
    }
    getDoctors(ailmentInput, displayDoctors);
  });
});
