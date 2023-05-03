const getDetail = async (lat, lon) => {
  const response = await
  fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=bdb0390a7695d1a04ae5f2a560bb1cce`);
  const data = response.json();
  return data;
};

export default getDetail;
