/* eslint-disable react/button-has-type */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

// Define an array with air quality levels
const LEVELS = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

const CityCard = ({ level, name, id }) => {
  const navigate = useNavigate();

  // Define a click handler that navigates to the detail page for this city
  const handleClick = () => navigate(`/detail/${id}`);

  // Render the city card with its name, air quality level, and a button to nav to the detail page
  return (
    <div className="d-flex cityCard">
      <button className="forward-arrow transparent" onClick={handleClick}>
        <IoArrowForwardCircleOutline />
      </button>
      <div className="d-flex cardName">
        <h1>{name}</h1>
        <span>{LEVELS[level - 1]}</span>
      </div>
    </div>
  );
};

CityCard.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default CityCard;
