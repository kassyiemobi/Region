// fetch("https:/ov-region.xyz//api/earth/index?category=countries")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
const url = () => {
  // GET Request.
  fetch(
    "https://cors-anywhere.herokuapp.com/https://ov-region.xyz//api/earth/index?category=countries"
  )
    // Handle success
    .then((response) => response.json()) // convert to json
    .then((json) => {
      // console.log(json.data)
      let results = json.data;
      //target container
      let box = document.querySelector("#container");
      // console.log(results);
      //convert object gotten from response to array in order to be able to map it
      const entries = Object.values(results);

      console.log(entries);
      //targeting the container to display the list
      //and mapping the array inside the select tag
      box.innerHTML =
        "<select>" +
        entries
          .map(function (entry) {
            return "<option>" + entry + "</option>";
          })
          .join("") +
        "<section>";
    })
    .catch((err) => console.log("Request Failed", err)); // Catch errors
};