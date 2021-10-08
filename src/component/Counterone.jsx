import React, { useState } from "react";

import { GrAdd } from "react-icons/gr";
import { FaMinus } from "react-icons/fa";
function Counterone({ Cartitem }) {
  const [count, setCount] = useState(0);

  return (
    <div  style={{ display: "flex", alignItems: "center", alignContent: "center" }}>
      <ul>
        <tr>
          <td>
            <td>
              <div>
                {count === 0 ? (
                  <h3 style={{backgroundColor:"yellow",borderRadius:"5px", height:"30px",width:"50px", aligntext:"center",alignContent:"center"}}className="zero">Zero</h3>
                ) : (
                  <h3 style={{backgroundColor:"skyblue",borderRadius:"5px",height:"30px",width:"30px", aligntext:"center",alignContent:"center"}} className="count">{count}</h3>
                )}
              </div>
            </td>
            <td>
              <button style={{backgroundColor:"grey",borderRadius:"5px",height:"30px",width:"30px", aligntext:"center",alignContent:"center"}} onClick={() => setCount(count + 1)}>
                <GrAdd />
              </button>
            </td>
            <td>
              <button
                style={{backgroundColor:"tomato",borderRadius:"5px",height:"30px",width:"30px", aligntext:"center",alignContent:"center"}}
                onClick={() => {
                  if (count > 0) setCount(count - 1);
                }}
              >
                <FaMinus />
              </button>
            </td>
            <td>
              <button style={{backgroundColor:"pink",borderRadius:"5px",height:"30px",width:"100px", aligntext:"center",alignContent:"center"}} onClick={() => Cartitem()}>
                Add to cart
              </button>
            </td>
          </td>
        </tr>
      </ul>
    </div>
  );
}

export default Counterone;
