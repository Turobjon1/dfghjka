const KEY = "1b70d5a3d8f7548af6551bc567d1ab55";

const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=metric&appid=${KEY}`;
  const API = base + query;
  const request = await fetch(API);
  const data = await request.json();

  return data;
};
