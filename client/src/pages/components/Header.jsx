import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    guest: 1,
  });

  const destinationRef = useRef(null); // Ref for the destination input field

  const handleRoomSelect = (roomType) => {
    setSelectedRoom(roomType);
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    const searchParams = {
      destination: destinationRef.current.value, // Get the value from the input field using the ref
      guestCount: options.guest,
      roomType: selectedRoom,
    };

    const queryString = new URLSearchParams(searchParams).toString();
    const url = `/hotels?${queryString}`;
    navigate(url);
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerItem active">
            <FontAwesomeIcon icon={faHotel} />
            <span>Hotels</span>
          </div>
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
                Make your hotel bookings with us. It is Fabulous.
              </h1>
              <p className="description">
                It will be amazing if you trusted us the michayibooking with
                your safe relaxing hotel destinations. Give us a chance to
                schedule your bookings and you will never regret as we offer you
                the best hospitality places to chill with family and friends.
                Let's do this together.
              </p>
              <NavLink to="/signup" className="headerBtn">
                Sign up
              </NavLink>
            </>
          )}
        </div>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faHotel} className="headerIcon" />
            <input
              type="text"
              placeholder="destination"
              className="headerSearchInput"
              ref={destinationRef}
            />
          </div>
          {/* <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>
              {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
            </span>
            {openDate && (
              <DateRangePicker
                onChange={(item) => setDate([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}
          </div> */}
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPeopleGroup} className="headerIcon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >
              {`${options.guest} guest`}
            </span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Guest</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.guest <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("guest", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.guest}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("guest", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <select
              value={selectedRoom}
              onChange={(e) => handleRoomSelect(e.target.value)}
              className="headerSearchInput"
            >
              <option value="">Room Type</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Deluxe">Family</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Royal</option>
            </select>
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
