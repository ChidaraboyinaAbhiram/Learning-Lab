import React, { useState } from 'react';

const SearchBar = ({ onSearch, placeholder = 'Search...' }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (onSearch) onSearch(term);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder={placeholder}
      />
    </form>
  );
};

export default SearchBar;
