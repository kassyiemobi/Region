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

      console.log(countries);
      //targeting the container to display the list
      //and mapping the array inside the select tag
      box.innerHTML =
        "<select class='form-control input-lg'>" +
        countries
          .map(function (countryy) {
            return "<option >" + countryy + "</option>";
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

      console.log(states);
      box.innerHTML =
        "<select class='form-control input-lg'>" +
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

      console.log(cities);
      box.innerHTML =
        "<select class='form-control input-lg'>" +
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
