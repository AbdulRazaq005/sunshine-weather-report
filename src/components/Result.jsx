import react from "react";

export default (p) => {
  
  return (
    <div className="rightContainer">
      
      <div className="rightComp">
        <h1>Weather Report</h1>
        <div className="resImage">
        </div>
        <div className="cityDetails">
          <h2 id="city">Place : {p.cityName}, {p.country}</h2>
        </div>
        <div className="resDetail">
          <h2 id="temp">{p.temp}°С</h2>
          <h2 className="resNum">Feels Like : {p.feels_like}</h2>
          <h2 className="resNum">Humidity : {p.humidity}</h2>
          <h2 id="desc">{p.desc}</h2>
        </div>
      </div>

    </div>
  );
};
