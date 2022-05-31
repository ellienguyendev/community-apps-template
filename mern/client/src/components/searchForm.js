import React, { useState, useEffect, useRef } from "react";
import Button from "./button";




function SearchForm() {

  return (
    <div className="search-location-input form-group">
      <label htmlFor="searchInput">Enter a City or Zip Code to Find Resources Near You</label>
      <input
        placeholder='City or Zip Code'
        name='searchInput'
        class='form control'
      />
      <Button
          text='Search'
      />
    </div>
  );
}

export default SearchForm;