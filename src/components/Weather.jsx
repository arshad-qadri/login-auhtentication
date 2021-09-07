import { useState, useEffect } from "react";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../actions";
import "../css/weather.css";

const Weather = () => {
  const [weather, setWeather] = useState("pune");
  const dispatch = useDispatch();
  const weat = useSelector(state => state.weatherReducer);
  const res = weat.weathers;
  useEffect(() => {
    dispatch(getWeather(weather));
  }, [weather]);

  return (
    <>
      <Nav />
      <div className="weather">
        <div className="weather-inner">
          <input
            type="search"
            value={weather}
            onChange={e => setWeather(e.target.value)}
          />
          {res.data ? (
            <>
              <div className="weather-data">
                <h1>{res.data.name} </h1>
                <h2>{res.data.main.temp} °Cel</h2>
                <h5>
                  Min :{res.data.main.temp_min} °Cel | Max :
                  {res.data.main.temp_max} °Cel
                </h5>
              </div>
            </>
          ) : (
            <p>no data</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
