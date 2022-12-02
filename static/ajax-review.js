// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  evt.preventDefault();

  fetch("/fortune")
    .then((response) => response.text())
    .then((responseData) => {
      document.querySelector("#fortune-text").innerHTML = responseData;
    });
}

document
  .querySelector("#get-fortune-button")
  .addEventListener("click", showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();
  const zipcode = document.querySelector("#zipcode-field").value;
  const url = `/weather?zipcode=${zipcode}`;
  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch(url)
    .then((response) => response.json())
    .then((status) => {
      document.querySelector("#weather-info").innerHTML = status.forecast;
    });
}

document.querySelector("#weather-form").addEventListener("submit", showWeather);
