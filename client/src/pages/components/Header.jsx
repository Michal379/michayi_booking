import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ setSearchedHotels }) => {
  const destinationRef = useRef(null); // Ref for the destination input field
  const navigate = useNavigate();

  const handleSearch = () => {
    const destination = destinationRef.current.value.toLowerCase();
    setSearchedHotels(destination); // Pass the searched destination to the parent component

    const searchParams = {
      destination, // Use the searched destination instead of the input field value
    };

    const queryString = new URLSearchParams(searchParams).toString();
    const url = `/hotels?${queryString}`;
    navigate(url);
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerItem active">
            <FontAwesomeIcon icon={faHotel} />
            <span>Hotels</span>
          </div>
          <h1 className="headerTitle">
            Make your hotel bookings with us. It is Fabulous.
          </h1>
          <p className="description">
            It will be amazing if you trusted us the michayibooking with your safe relaxing hotel destinations.
            Give us a chance to schedule your bookings and you will never regret as we offer you the best hospitality places to chill with family and friends.
            Let's do this together.
          </p>
          <NavLink to="/signup" className="headerBtn">
            Sign up
          </NavLink>
        </div>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faHotel} className="headerIcon" />
            <input
              type="text"
              placeholder="Search hotels"
              className="headerSearchInput"
              ref={destinationRef}
            />
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
