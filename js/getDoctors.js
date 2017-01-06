var apiKey = require('./../.env').apiKey;



exports.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      doctors = [];
      function Doctor(name, bio, distance, location) {
        this.name = name;
        this.bio = bio;
        this.distance = distance;
        this.location = location;
      }
      arrayLength = result.data.length;
      for (i = 0; i < arrayLength; i++) {
      var new_doctor = new Doctor(result.data[i].practices[0].name, result.data[i].profile.bio, result.data[i].practices[0].distance.toFixed(2), "lat: " + result.data[i].practices[0].lat + ", lon: " + result.data[i].practices[0].lon);
      doctors.push(new_doctor);
      }
      doctors.forEach(function(doctor) {
        $('#doctorList').append(doctor.name);
        $('#doctorList').append("<br>");
        $('#doctorList').append(doctor.bio);
        $('#doctorList').append("<br>");
        $('#doctorList').append(doctor.distance);
        $('#doctorList').append(" miles away<br><br><br>");
      });
    })
   .fail(function(error){
      console.log("fail");
    });
};
