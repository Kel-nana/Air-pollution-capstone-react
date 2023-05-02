import { v4 as uuidv4 } from 'uuid';
import locations from '../utils/locations';
import getDetail from '../utils/fetchApi';

// Defining constants for action types
const ADD_CITIES = 'air-pollution/src/redux/ADD_CITIES';
const FILTER_CITIES = 'air-pollution/src/redux/FILTER_CITIES';

// Defining action creators
const addCities = (payload) => ({ type: ADD_CITIES, payload });
const filterAction = (payload) => ({ type: FILTER_CITIES, payload });

// A function that fetches city data from API for each location & returns an array of city data obj
const fetchCityData = async () => {
  const arr = [];
  const promises = locations.map(async (item) => {
    const data = await getDetail(item.lat, item.lon);
    arr.push({
      ...data.list,
      name: item.name,
      id: uuidv4(),
    });
  });
  await Promise.all(promises);
  return arr;
};

// An async action creator that dispatches the ADD_CITIES action with the fetched city data
export const displayCitiesAtHomepage = () => async (dispatch) => {
  const arr = await fetchCityData();
  dispatch(addCities(arr));
};

// An async action creator that filters city data by key and dispatches FILTER_CITIES action
export const filterCities = (key) => async (dispatch) => {
  const arr = await fetchCityData();
  const filteredArr = arr.filter((city) => city[0].main.aqi === key);
  dispatch(filterAction(filteredArr));
};

// A reducer function that updates the state based on the dispatched action
const cityReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CITIES:
    case FILTER_CITIES:
      return [...action.payload];
    default:
      return state;
  }
};

export default cityReducer;
