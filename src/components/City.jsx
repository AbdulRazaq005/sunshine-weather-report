import react, { useState } from "react";

export default (p) => {
  // const [temp, setTemp] = useState("Enter City Name");
  const [str, setStr] = useState("");
  
  // function getResult(){
  //   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${str}&appid=da41a288bd22dd27ea33849666faa2a3`)
  //   .then(res => res.json())
  //   .then(ob =>{ 
  //     p.temp=ob.main.temp
  //     p.feels_like=ob.feels_like
  //     p.temp_min=ob.temp_min
  //     p.temp_max=ob.temp_max
  //   })
  // }
  function inputStr(){
    let s=document.getElementById("inputString").value;
    setStr(s);
  }

  return (
    <div className="leftComp">
      <h1>Enter City Name</h1>
      <input id="inputString" onChange={inputStr}/>
      <br/>
      <button onClick={p.fun}>Click</button>
    </div>
  );
};
