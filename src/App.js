import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Grid } from '@mui/material';
import Navbar from "./component/navbar";
import PizzaCard from "./component/card";
import axios from 'axios';


function App() {
  const [pizzaData, setPizzaData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        console.log(apiUrl,'asas');
        const response = await axios.get(`${apiUrl}pizzas-top-ten`);
        setPizzaData(response.data);
      } catch (error) {
        console.error(error);
        // Handle errors if needed
      }
    };

    fetchDataFromApi(); // Call the function when the component mounts
  }, []);
  return (
    <Router>
      <Navbar />
      <Grid container spacing={2}>
        {pizzaData.map((pizza, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <PizzaCard pizza={pizza} />
          </Grid>
        ))}
      </Grid>
      
    </Router>
  );
}
export default App;
