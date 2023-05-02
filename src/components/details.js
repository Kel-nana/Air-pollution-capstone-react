import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  IoChevronBackSharp,
  IoMicSharp,
  IoSettingsSharp,
} from 'react-icons/io5';

const Details = () => {
  const { cityId } = useParams(); // get the cityId from the URL
  const navigate = useNavigate(); // initialize the navigate function
  const cities = useSelector((state) => state.cities).flat(); // get the cities from the Redux store
  // function to handle the back button click event
  const handleBackButton = () => {
    navigate('/');
  };

  const city = cities.filter((city) => city.id === cityId)[0];
  return (
    <div>
      <header className="d-flex header">
        <button
          type="button"
          className="backButton transparent"
          onClick={handleBackButton}
        >
          <IoChevronBackSharp />
        </button>
        <span>
          Pollutant concentration in μg/m
          <sup>3</sup>
        </span>
        <div className="d-flex icons">
          <IoMicSharp />
          <IoSettingsSharp />
        </div>
      </header>
      <div className="detailBody">
        <h1 className="d-flex title">{city.name}</h1>
        <ul className="detailList">
          {Object.entries(city[0].components).map((key) => (
            <li key={city.id} className="d-flex listItem">
              <span>
                {key[0].toUpperCase()}
                :
              </span>
              <span>{key[1]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
