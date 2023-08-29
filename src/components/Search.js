import React from "react";

function Search( {searchTerm, handleSearchChange}) {

  const handleChange = (e) => {
    handleSearchChange(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        className="prompt" 
        onChange={handleChange}
        value={searchTerm}/> 
        {/* value === controlled form */}

        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
