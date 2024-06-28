async function fetchWeather(country) {
  try {
    const countryDetails = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!countryDetails.ok) throw new Error("failed to fetch");

    const response = await countryDetails.json();
    const location = response[0].capitalInfo.latlng;
    const weather = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location[0]}&longitude=${location[1]}&current_weather=true`
    );
    if (!weather.ok) throw new Error("failed to fetch");

    const weatherResponse = await weather.json();
    console.log(`
          Country: ${response[0].name.common}
          City: ${response[0].capital}
          Temperature: ${weatherResponse.current_weather.temperature} ${weatherResponse.current_weather_units.temperature}`);
  } catch (error) {
    console.log(error);
  }
}
fetchWeather("France");
fetchWeather("Burundi");
fetchWeather("Rwanda");
