import React, { useState } from "react";
import DisplayWeather from "./weatherdisplay";
import Button from "@material-ui/core/Button";
import "./weather.css"

import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from '@material-ui/core/styles';


import TextField from '@material-ui/core/TextField';

import { blue } from '@material-ui/core/colors';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));



const theme = createTheme({
  palette: {
    primary: blue,
  },
});

function Weather() {
  const classes = useStyles();
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
  });

  const APIKEY = "cb394156df105c433c693903afdbdafd";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city == "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
  };
  return (
    <div className="weather">
      <h1 className="title">Weather App</h1>
      <br />
      {/* <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form> */}
      <form>
    <div className="formset">
    <ThemeProvider theme={theme}>
      
      <TextField 
        className="search"
        name="city"
        label="City Name"
        onChange={(e) => handleChange(e)}
        variant="outlined"
        id="mui-theme-provider-outlined-input"
      />
    </ThemeProvider>
    <Button className="searchbtn" onClick={(e) => weatherData(e)} variant="outlined">Search</Button>
    </div>
  </form>
  <br/>

      {/* {console.log(weather)} */}
      {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
      
    </div>
  //   <form className={classes.root} noValidate>
  //   <div className="formset">
  //   <ThemeProvider theme={theme}>
      
  //     <TextField 
  //       className="search"
  //       label="City Name"
  //       onChange={(e) => handleChange(e)}
  //       variant="outlined"
  //       id="mui-theme-provider-outlined-input"
  //     />
  //   </ThemeProvider>
  //   <Button className="searchbtn" onClick={(e) => weatherData(e)} variant="outlined">Search</Button>
  //   </div>
  // </form>
  
    );
}

export default Weather;