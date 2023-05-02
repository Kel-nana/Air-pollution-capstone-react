import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';
import CityCard from '../components/cityCard';
import DropdownMenu from '../components/dropdown';

jest.mock('../utils/fetchApi');

describe('Home components test', () => {
  it('CityCard renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <CityCard
              id="123046"
              level="3"
              name="Tokyo"
            />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Dropdown renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <DropdownMenu />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
