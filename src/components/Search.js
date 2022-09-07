import React from "react";

function Search({inputValue, onHandleChange}) {
  
  function handleChange(e){
     onHandleChange(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" type="text" value={inputValue} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );

}

export default Search;
