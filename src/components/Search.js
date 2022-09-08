import React from "react";

function Search({handleSearch}) {

  function inputValueFunc(e){
    handleSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          onChange={inputValueFunc} 
          />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
