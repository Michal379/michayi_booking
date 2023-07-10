import React from 'react';
import '../../App.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <h1>About us</h1>         
          <li> Michayibooking is a leading online platform </li>
            <li>for hotel bookings. We provide a wide range </li>
            <li>of hotels in various destinations, countries, </li>
            <li>counties, and regions. Choose from our extensive </li>
            <li>collection of hotels to make your next vacation memorable.</li>        
        </ul>
        <ul className="fList">
            <h1>Contact us</h1>
          <li className="fListItem">Facebook</li>
          <li className="fListItem">Twitter</li>
          <li className="fListItem">Instagram</li>
          <li className="fListItem">Cloud</li>
          <li className="fListItem">Linkedin</li>
        </ul>
        
        <ul className="fList">
          <h1>Notes</h1>         
          <li> Michayibooking can be your all times app</li>
            <li>for recommending your friends or families </li>
            <li>and giving feedback on how your experience was  </li>
            <li>when you reserved your hotel room and </li>
            <li>how your stay was including the followups.</li>        
        </ul>
      </div>
      <div className="text">Copyright @ 2023 michayibooking.</div>
    </div>
  );
};

export default Footer;
