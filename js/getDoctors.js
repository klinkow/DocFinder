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
      // console.log(result.data[0].practices[0].name);
      arrayLength = result.data.length;
      for (var counter = 0; counter = arrayLength; counter += 1) {
        console.log(counter)
      // new_doctor = Doctor(result.data[counter].practices[0].name, result.data[counter].profile.bio, result.data[counter].distance.toFixed(2), "lat: " + result.data[counter].practices[0].lat + ", lon: " + result.data[counter].practices[0].lon);
      // doctors.push(new_doctor);
      };
      console.log(doctors);
    })
   .fail(function(error){
      console.log("fail");
    });
};
