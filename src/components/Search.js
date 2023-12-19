import React from "react";

function Search({ searchTerm, onHandleChange }) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          onChange = {onHandleChange}
          value={searchTerm}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
