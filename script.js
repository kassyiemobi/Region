const url = () => {
  // GET Request.
  fetch(
    "https://cors-anywhere.herokuapp.com/https://ov-region.xyz//api/earth/index?category=countries"
  )
    // Handle success
    .then((response) => response.json()) // convert to json
    .then((json) => {
      // console.log(json.data)
      let country = json.data;
      //target container
      let box = document.querySelector("#country");
      // console.log(results);
      //convert object gotten from response to array in order to be able to map it
      const countries = Object.values(country);
      countries.unshift("Select Country");

      console.log(countries);
      //targeting the container to display the list
      //and mapping the array inside the select tag
      box.innerHTML =
        "<select class='form-control input-lg' id='country'>" +
        countries
          .map(function (country) {
            return "<option >" + country + "</option>";
          })
          .join("") +
        "</section>";
    })
    .catch((err) => console.log("Request Failed", err)); // Catch errors
};
url();

const api = () => {
  // GET Request.
  fetch(
    "https://cors-anywhere.herokuapp.com/https://ov-region.xyz//api/earth/index?category=states"
  )
    .then((response) => response.json())
    .then((json) => {
      let state = json.data;
      let box = document.querySelector("#states");
      const states = Object.values(state);
      states.unshift("Select State");

      console.log(states);
      box.innerHTML =
        "<select class='form-control input-lg' id='state'>" +
        states
          .map(function (state) {
            return "<option >" + state + "</option>";
          })
          .join("") +
        "</section>";
    })
    .catch((err) => console.log("Request Failed", err));
};
api();

const Api = () => {
  // GET Request.
  fetch(
    "https://cors-anywhere.herokuapp.com/https://ov-region.xyz//api/earth/index?category=cities"
  )
    .then((response) => response.json())
    .then((json) => {
      let city = json.data;
      let box = document.querySelector("#cities");
      const cities = Object.values(city);
      cities.unshift("Select City");

      console.log(cities);
      box.innerHTML =
        "<select class='form-control input-lg' id= 'city' > " +
        cities
          .map(function (city) {
            return "<option >" + city + "</option>";
          })
          .join("") +
        "</section>";
    })
    .catch((err) => console.log("Request Failed", err));
};
Api();

const getData = (document.querySelector("#submit").onclick = (e) => {
  //prevents the form from refreshing everytime
  e.preventDefault();
  //targeting the list of contries, states and cities
  var country = document.querySelector("#country").value;
  var state = document.querySelector("#state").value;
  var city = document.querySelector("#city").value;

  //displaying in console.log
  console.log("Country: " + country, "State: " + state, "City: " + city);
});
