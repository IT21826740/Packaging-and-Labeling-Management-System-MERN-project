import React, { useState } from "react";
import "../../Styles/Search.css"

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
      <button className="search-bttn" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
