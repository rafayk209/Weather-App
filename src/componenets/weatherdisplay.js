import React from "react";
import "./weatherdisplay.css"

function DisplayWeather(props) {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="displayweather">
      {data.cod != 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.name} , {data.sys.country} 
            </span> <br/>Weather time 
            <span className="cardsubtitle">
              : {new Date().toLocaleTimeString()}
            </span>

            <h1 className="temp">
              {" "}
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>
            </h1>
            <span className="weather-description">{data.weather[0].main}</span><br/><br/>
            <img className="weather-icon" src={iconurl} alt="" srcset="" />
            
          </div> <br/>
          <div className="weatherdetails">
            {/* <div className="section1">
              <table>
                <tr>
                  <td>
                    <h4>High/Low</h4>
                  </td>
                  <td>
                    <span>
                      {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Humidity</h4>
                  </td>
                  <td>
                    <span>{data.main.humidity} %</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Pressure</h4>
                  </td>
                  <td>
                    <span>{data.main.pressure} hPa</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Visibility</h4>
                  </td>
                  <td>
                    <span>{data.visibility / 1000} Km</span>
                  </td>
                </tr>
              </table>
            </div> */}
            </div>


            <div className="section2">
              <table className="tableDetail">
                <tr className="rowheadDetail">
                  <th className="colDetail">High/Low</th>
                  <th className="colDetail">Humidity</th>
                  <th className="colDetail">Pressure</th>
                  <th className="colDetail">Visibility</th>
                  {/* <th className="colDetail">Wind</th>
                  <th className="colDetail">Wind Direction</th>
                  <th className="colDetail">Sunrise</th>
                  <th className="colDetail">Sunset</th> */}
                </tr>
                <tr className="rowDetail">
                <td className="colDetail">
                    <span>
                      {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}
                    </span>
                  </td>
                  <td className="colDetail">
                    <span>{data.main.humidity} %</span>
                  </td>
                  <td className="colDetail">
                    <span>{data.main.pressure} hPa</span>
                  </td>
                  <td className="colDetail">
                    <span>{data.visibility / 1000} Km</span>
                  </td>
                  {/* <td className="colDetail">
                    <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                  </td>
                  <td className="colDetail">
                    <span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                  <td className="colDetail">
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                  <td className="colDetail">
                    <span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td> */}
                </tr>
                <tr className="rowheadDetail">
                  {/* <th className="colDetail">High/Low</th>
                  <th className="colDetail">Humidity</th>
                  <th className="colDetail">Pressure</th>
                  <th className="colDetail">Visibility</th> */}
                  <th className="colDetail">Wind</th>
                  <th className="colDetail">Wind Direction</th>
                  <th className="colDetail">Sunrise</th>
                  <th className="colDetail">Sunset</th>
                </tr>
                <tr className="rowDetail">
                {/* <td className="colDetail">
                    <span>
                      {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}
                    </span>
                  </td>
                  <td className="colDetail">
                    <span>{data.main.humidity} %</span>
                  </td>
                  <td className="colDetail">
                    <span>{data.main.pressure} hPa</span>
                  </td>
                  <td className="colDetail">
                    <span>{data.visibility / 1000} Km</span>
                  </td> */}
                  <td className="colDetail">
                    <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                  </td>
                  <td className="colDetail">
                    <span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                  <td className="colDetail">
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                  <td className="colDetail">
                    <span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
              </table>
              {/* <table>
                <tr>
                  <td>
                    <h4>Wind</h4>
                  </td>
                  <td>
                    <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Wind Direction</h4>
                  </td>
                  <td>
                    <span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunrise</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunset</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
              </table> */}
             


           
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;