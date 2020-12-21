import React, { useState, useContext } from "react";
import { auth, provider } from "../Firebase/firbase";
import "./styles.css";
import PropTypes from 'prop-types';

// Data Provider
import { StateContext } from "../Provider/StateProvider";

export default function Dropdown({ options,value, prompt, onChange ,maxItems }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(maxItems);
  const remainingItems = options.length - items;
  const [toggleItem, setToggleItem] = useState(true);

  // user previlages
  const [user, setUser] = useContext(StateContext);

  // user login
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        setUser(res.user);
      })
      .catch((error) => console.log(error.message));
  };

  

  function filter(options) {
    return options.filter(
      (option) => option.name.toLowerCase().indexOf(query?.toLowerCase()) > -1
    );
  }

  return (
    <div className="dropdown">
      <div
        className="head__control"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <div className="selected__value">{value ? value.name : prompt}</div>
        <div className={`down__arrow ${open ? "open" : null}`}></div>
      </div>
      <div className={`options ${open ? "open" : null}`}>
        <div className="search__box">
          <input
            className="search"
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setToggleItem(false);
            }}
          />
        </div>
        {filter(options).length === 0 ? (
          <div className="option">
            "{query}" not found
            {/* user logged-in should show this add button option */}
            {user === null ? <button className="add__button" onClick={signIn}>Login</button> : <button className="add__button">Add & Select</button>}
          </div>
        ) : (
          filter(options)
            .slice(0, items)
            .map((option) => (
              <div className="option" key={option.id} onClick={() => {
                onChange(option);
              }} >
                {/* last option inthe dropdown */}
                {option.id === items - 1 ? (
                  <div>
                    {option.name}
                    <div
                      className="more__items"
                      onClick={() => {
                        setItems(options.length);
                        setToggleItem(false);
                      }}
                    >
                      {toggleItem === true || query === ""
                        ? `${remainingItems} more..`
                        : " "}
                    </div>
                  </div>
                ) : (
                  option.name
                )}
              </div>
            ))
        )}
      </div>
    </div>
  );
}

// propTypes check 
Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })),
  value: PropTypes.object,
  prompt: PropTypes.string, 
  onChange: PropTypes.func,
  maxItems: PropTypes.number
}
