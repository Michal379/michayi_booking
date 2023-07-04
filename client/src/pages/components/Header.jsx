import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

const Header = ({ type }) => {
  const [openDate, setOPenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOPenOPtions] = useState(false);
  const [options, setOptions] = useState({
    guest: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className='header'>
      <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
        <div className='headerList'>
          <div className='headerItem active'>
            <FontAwesomeIcon icon={faHotel} />
            <span>Hotels</span>
          </div>
          {type !== 'list' && (
            <>
              <h1 className='headerTitle'>Make your hotel bookings with us. It is Fabulous.</h1>
              <p className='description'>
                It will be amazing if you trusted us the michayibooking with your safe relaxing hotel destinations.
                Give us a chance to schedule your bookings and you will never regret as we offer you the best hospitality
                places to chill with family and friends. Let's do this together.
              </p>
              <button className='headerBtn'>Signin</button>
            </>
          )}
        </div>              
        <div className='headerSearch'>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faHotel} className='headerIcon' />
            <input type='text' placeholder='destination' className='headerSearchInput' />
          </div>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span onClick={() => setOPenDate(!openDate)} className='headerSearchText'>
              {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
              />
            )}
          </div>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPeopleGroup} className='headerIcon' />
            <span onClick={() => setOPenOPtions(!openOptions)} className='headerSearchText'>
              {`${options.guest} guest`}
            </span>
            {openOptions && (
              <div className='options'>
                <div className='optionItem'>
                  <span className='optionText'>Guest</span>
                  <div className='optionCounter'>
                    <button
                      disabled={options.guest <= 1}
                      className='optionCounterButton'
                      onClick={() => handleOption('guest', 'd')}
                    >
                      -
                    </button>
                    <span className='optionCounterNumber'>{options.guest}</span>
                    <button
                      className='optionCounterButton'
                      onClick={() => handleOption('guest', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='headerSearchItem'>
            <button className='headerBtn'>Search</button>
          </div>
        </div>             
      </div>
    </div>
  );
};

export default Header;
