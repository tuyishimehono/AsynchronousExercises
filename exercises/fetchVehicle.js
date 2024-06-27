const fetchVehicle = async () => {
  const response = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2"
  );
  const output = await response.json();
  console.log(output.Results.filter(e => e.Country ==='UNITED STATES (USA)'))
};
fetchVehicle();
