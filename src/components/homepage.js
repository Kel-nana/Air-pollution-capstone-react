import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {
  IoMicSharp,
  IoSettingsSharp,
} from 'react-icons/io5';
import CityCard from './cityCard';
import { displayCitiesAtHomepage } from '../redux/cityReducer';
import logo from '../logo.png';
import DropdownMenu from './dropdown';

let triggeronce = false;

const Homepage = () => {
  const cityList = useSelector((state) => state.cities, shallowEqual).flat();
  const dispatch = useDispatch();
  useEffect(() => {
    if (triggeronce) return;
    dispatch(displayCitiesAtHomepage());
    triggeronce = true;
  }, []);
  return (
    <div className="primaryColor">
      <header className="d-flex header primaryColor">
        <h2>2023</h2>
        <span id="stats">Levels by Pollution Indexes</span>
        <div className="d-flex icons transparent">
          <IoMicSharp />
          <IoSettingsSharp />
        </div>
      </header>
      <div className="d-flex sub-header">
        <img src={logo} alt="logo" />
        <h1 id="sub-title">Air Pollution Across Cities</h1>
      </div>
      <div className="d-flex filter">
        <DropdownMenu />
      </div>
      <ul className="main">
        {cityList.map((city) => (
          <li key={city.id} className="mainList">
            <CityCard name={city.name} level={city[0].main.aqi} id={city.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Homepage;
