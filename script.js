let form = document.getElementById("form");
let info = document.createElement("div");
let contents = document.getElementById("contents");

const getWeather = async (city) => {
  const data = await getData(city);
  console.log(data);
  info.classList.add("info");

  if (city == data.name) {
    info.innerHTML = `
    <h4>${city}</h4>
    <img src=${
      data.weather[0].main === "Clouds"
        ? "./assets/images/rain.png"
        : "./assets/images/sunny.png"
    } />
    <p class="state">${data.weather[0].main}</p>
    <p>TEMP <span>${data.main.temp}</span> °C</p>

  `;
  } else {
    info.innerHTML = `
        <h4>Shahar nomini to'g'ri yozing!</h4>
    `;
  }

  contents.appendChild(info);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = form.city.value.trim();

  form.reset();
  getWeather(cityName);
  info.innerHTML = "";
});
