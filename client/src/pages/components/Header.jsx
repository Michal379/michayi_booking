import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


const Header = () => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);

  return (
    <div className='header'>
       <div className='headerContainer'>        
        <div className='headerList'>
        <div className='headerItem active'>
        <FontAwesomeIcon icon={faHotel} />
        <span>Hotels</span>
           </div>
           <h1 className='headerTitle'>Make your hotel bookings with us? It is Fabulous.</h1>
           <p className='description'>It will be amazing if you trusted us the michayibooking with your safe relaxing hotel destinations. Give us a chance to schedule your bookings and you will
           never regret as we offer you the best hospitality places to chill with family and friends. Let's do this together. </p>
           <button className='headerBtn'>Signin</button>
        </div>
        <div className='headerSearch'>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faHotel} className='headerIcon' />
            <input type='text' placeholder='destination' 
            className='headerSearchInput' />
            </div>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span className='headerSearchText'>date to date</span> 
            <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
            />          
            </div>
            <div className='headerSearchItem'>
                <button className='headerBtn'>Search</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header