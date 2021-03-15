import react, { useState } from "react";

export default (p) => {

  return (
    <div className="leftComp">
      <h1>Get Weather of your Current Location</h1>
      <button onClick={p.fun}>Click Here</button>
    </div>
  );
};
