import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { filterCities } from '../redux/cityReducer';

const DropdownMenu = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterCities(parseInt(e, 10)));
  };
  return (
    <DropdownButton
      variant="secondary"
      id="dropdown-basic-button"
      title="Filter by Pollution Level"
      onSelect={handleFilter}
    >
      <Dropdown.Item eventKey="1">Good</Dropdown.Item>
      <Dropdown.Item eventKey="2">Fair</Dropdown.Item>
      <Dropdown.Item eventKey="3">Moderate</Dropdown.Item>
      <Dropdown.Item eventKey="4">Poor</Dropdown.Item>
      <Dropdown.Item eventKey="5">Very Poor</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropdownMenu;
