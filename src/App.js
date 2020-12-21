import React, { useState, useEffect } from "react";
import Dropdown from "./Components/Dropdown";
import "./style.css";
import axios from "axios";

export default function App() {
  // Mock API
  const api = axios.create({
    baseURL: `https://5fe0e88d04f0780017de96fc.mockapi.io/v3/countries`
  });
  
  const [countries, setCountries] = useState([]);
  const [value, setVal] = useState(null)

  // always good to make an API call at ComponentDidMount lifecycle
  // it's better to practice calling API async & managing the response with try catch block
  useEffect(() => {
    (async () => {
      try{
        const data = await api.get("/").then(({ data }) => data);
        setCountries(data);
      }catch(error) {
        console.log(error)
      }
    })()
      
  }, [])

  // the parent should log the selected the country
  console.log("From the parent",value);

  return (
    <div className="app__container" style={{ width: 450 }}>
      <Dropdown 
      options={countries} 
      prompt="Select a location" 
      maxItems={4} 
      value = {value}
      onChange = {val => setVal(val)}
      />
    </div>
  );
}
