import React, { useState } from 'react';
import '../Style.css';
import { useNavigate } from 'react-router-dom';
export default function SearchBar() {
    
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchData(query);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const fetchData = (searchQuery) => {
    localStorage.setItem('searchedMovie', searchQuery);
    navigate('/searchMovie');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Movie"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
