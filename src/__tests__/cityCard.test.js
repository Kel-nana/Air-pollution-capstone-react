import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import CityCard from '../components/cityCard';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <CityCard />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
