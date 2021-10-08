import React, { useState } from "react";

import Counterone from "./Counterone";
function Count() {
  const [listitems, setListitems] = useState([]);
  const handleArray = () => {
    console.log("funtion called");
    setListitems((temp) => [...temp, "3"]);
  };
  console.log("listitmes", listitems);
  const handleDelete = () => {
     setListitems( listitems.splice(1))
  }
  return (
    <div>
    {listitems.map((item,index) =>(
        <ul>
            {index}
            <Counterone/>
        </ul>
        ))}
    
       
   
      <button onClick={handleArray}>add</button>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}
export default Count;
