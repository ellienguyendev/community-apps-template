import React, { useState, useEffect, useRef } from "react";

function SearchForm() {

  return (
    <div className="search-location-input form-group">
      <label htmlFor="searchInput">Enter a City or Zip Code to Find Resources Near You</label>
      <br />
      <input
        placeholder='City or Zip Code'
        name='searchInput'
        class='form control'
      />
    </div>
  );
}

export default SearchForm;