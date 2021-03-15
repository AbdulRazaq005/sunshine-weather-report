import React, {useState} from "react";
import City from "./City";
import Result from "./Result";
import Geolocation from "./Geolocation"

export default function App(){
  const [temp, setTemp] = useState(0);
  const [feels_like, setFeelsLike] = useState(0);
  const [desc, setDesc] = useState("Description");
  const [humidity, setHumidity] = useState(0);
  const [cityName, setCityName] = useState("City-Name");
  const [country, setCountry] = useState("Country");

  function dispResult(ob){
    document.getElementsByClassName("resImage")[0].style.backgroundImage=`url("http://openweathermap.org/img/wn/${ob.weather[0].icon}@2x.png")`;
    setTemp(ob.main.temp)
    setCityName(ob.name)
    setCountry(ob.sys.country)
    setFeelsLike(ob.main.feels_like)
    setDesc(ob.weather[0].description)
    setHumidity(ob.main.humidity)
  }

  function getResult(){
    let str=document.getElementById("inputString").value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${str}&units=metric&appid=da41a288bd22dd27ea33849666faa2a3`)
    .then(res => res.json())
    .then(ob=>{ 
      dispResult(ob)
    })
    .catch(err=>{
      alert("Invalid City-Name")
    })
  }
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }
  function showPosition(position) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=da41a288bd22dd27ea33849666faa2a3`)
    .then(res => res.json())
    .then(ob=>{ 
      dispResult(ob)
    }).catch(err=>{
      alert("Allow Location Permission or Enter city Name")
    })
  }
  return (
    <div id ="container">
      <div className="leftContainer">
        <City  fun={getResult} />
        <Geolocation fun={getLocation}/>
        <h2 id="myName">- by Abdul Razaq</h2>
      </div> 
      <Result 
        temp={temp}
        feels_like={feels_like}
        desc={desc}
        humidity={humidity}
        cityName={cityName}
        country={country}
      />
    </div>
  );
};
