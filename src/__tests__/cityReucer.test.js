import cityReducer, { addCities, filterCities } from '../redux/cityReducer';

describe('cityReducer', () => {
  const initialState = [];
  const mockCity = { name: 'Los Angeles', id: '1' };

  it('should return the initial state', () => {
    expect(cityReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_CITIES', () => {
    const action = addCities([mockCity]);
    const expectedState = [mockCity];
    expect(cityReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FILTER_CITIES', () => {
    const action = filterCities('key');
    const expectedState = [mockCity];
    expect(cityReducer([mockCity], action)).toEqual(expectedState);
  });

  it('should return the previous state for an unknown action type', () => {
    const action = { type: 'UNKNOWN' };
    expect(cityReducer(initialState, action)).toEqual(initialState);
  });
});
