import React, { useState } from "react";

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const reset = () => {
    setValue("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (value.trim() === "") {
      return alert("Enter query to search");
    }
    onSubmit(value);
    reset();
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        value={value}
        onChange={handleInputChange}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;
