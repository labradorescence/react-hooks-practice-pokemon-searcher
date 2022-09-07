import React from "react";

function Search({onHandleChange}) {

  function handleChange(e){
   // console.log(e.target.value)
    onHandleChange(e.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          type="text"
          // value = {inputValue}
          onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
