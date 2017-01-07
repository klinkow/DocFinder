var apiKey = require('./../.env').apiKey;

exports.getDoctors = function(medicalIssue, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      doctors = [];
      function Doctor(name, bio, distance, location) {
        this.name = name;
        this.bio = bio;
        this.distance = distance;
        this.location = location;
      }
      for (i = 0; i < result.data.length; i++) {
      var new_doctor = new Doctor(result.data[i].practices[0].name, result.data[i].profile.bio, result.data[i].practices[0].distance.toFixed(2), "lat: " + result.data[i].practices[0].lat + ", lng: " + result.data[i].practices[0].lon);
      doctors.push(new_doctor);
      }
      displayFunction(doctors);
    })
   .fail(function(error){
      console.log("fail");
    });
};
