import React, { useState, useRef } from 'react';

const Search = ({ onSearch }) => {
  const nameRef = useRef(null);
  const locationRef = useRef(null);

  const handleSearch = () => {
    const searchParams = {
      name: nameRef.current.value,
      location: locationRef.current.value,
    };

    onSearch(searchParams);
  };

  return (
    <div className="search">
      <input type="text" placeholder="Search by name" ref={nameRef} />
      <input type="text" placeholder="Search by location" ref={locationRef} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
