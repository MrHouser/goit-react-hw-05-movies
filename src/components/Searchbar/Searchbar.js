import { useState } from "react";
import { toast } from "react-toastify";
import s from "./Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const reset = () => {
    setValue("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (value.trim() === "") {
      return toast.warning("Enter query to search");
    }
    onSubmit(value);
    reset();
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={s.form}>
      <input
        className={s.input}
        type="text"
        autoComplete="off"
        autoFocus
        value={value}
        onChange={handleInputChange}
      ></input>
      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
};

export default Searchbar;
