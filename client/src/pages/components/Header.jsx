import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
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