// import React, { useState, useRef } from 'react';

// const Search = ({ onSearch }) => {
//   const destinationRef = useRef(null);
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [guestCount, setGuestCount] = useState(1);
//   const [roomType, setRoomType] = useState('');

//   const handleSearch = () => {
//     const searchParams = {
//       destination: destinationRef.current.value,
//       startDate,
//       endDate,
//       guestCount,
//       roomType,
//     };

//     onSearch(searchParams);
//   };

//   return (
//     <div className="search">
//       <input type="text" placeholder="Destination" ref={destinationRef} />
//       {/* Add date pickers for start and end dates */}
//       {/* Add input or select for guest count */}
//       {/* Add select for room type */}
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default Search;
