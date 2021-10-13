import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Counterone from "./Counterone";
import { ImCart } from "react-icons/im";
import { BsTrashFill } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { FaMinus } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";

export default function Counter() {
  const [listitems, setListitems] = useState([]);
  const [count, setCount] = useState(0);
  const [Counts, SetCount] = useState(0);
  // const [CountItems, setCountitems] = useState(0);
  const [removedCounterIdx, setRemovedCounterIdx] = useState([]);

  const handleDragEnd = (results) => {
    let templistitems = [...listitems];
    let [selectedRow] = templistitems.splice(results.source.index, 1);
    templistitems.splice(results.destination.index, 0, selectedRow);
    setListitems(templistitems);
  };

  const increment = (id) => {
    setListitems(
      [...listitems].map((object) => {
        if (object.id === id) {
          return {
            ...object,
            count: object.count + 1,
          };
        } else return object;
      })
    );
    if (listitems[id].count === 0) {
      SetCount(Counts + 1);
    }
  };

  const decrement = (id) => {
    setListitems(
      [...listitems].map((object) => {
        if (object.id === id && object.count > 0) {
          return {
            ...object,
            count: object.count - 1,
          };
        } else return object;
      })
    );
  };
  const handleDelete = (id) => {
    let tempArray = [...removedCounterIdx];
    tempArray.push(id);
    setRemovedCounterIdx(tempArray);
    if(Counts > 0){
      SetCount(Counts - 1);
    }
   
  };
  const reset = (id) => {
    setListitems(
      [...listitems].map((object) => {
        if (object.count > 0)  {
          console.log(object.count);
          return {
            count: 0
          };
        } 
      })
    );
  };

  const handleAdd = () => {
    console.log("funtion called");
    setCount(count + 1);
    setListitems((temp) => [...temp, { id: `${count}`, count: 0, cart: 0 }]);
    console.log(listitems, "listitems");
  };
  console.log("listitmes", listitems);

  const resetall = () => {
    setListitems(listitems.splice());
    SetCount(0);
    setCount(0);
  };
  console.log(resetall, "resetall");

 
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div>
        <table>
          <Droppable droppableId="tbody">
            {(provided) => (
              <tbody
                ref={provided.innerRef}
                {...provided.droppableProps}
                {...provided.dragHandleProps}
              >
                <tr
                  className="navbar navbar-light bg-light"
                >
                  <ImCart />
                  <th>
                    <span className="badge rounded-pill bg-secondary" style={{ width: 50 }}>{Counts} </span>
                      
                  </th>
                  <th>
                    <h4>item</h4>
                  </th>
                  <th>
                    <button
                     
                      className="btn btn-success m-2"
                      onClick={reset}
                    
                     
                    >
                      <BiReset />
                    </button>
                  </th>
                  <th>
                    <button
                       className="btn btn-primary m-2"
                      onClick={resetall}
                    >
                      <GrPowerReset />
                    </button>
                  </th>
                </tr>
                <ul>
                  {listitems.map((item, index) => (
                    <div
                      style={{
                        display: removedCounterIdx?.includes(item.id)
                          ? "none"
                          : "block",
                      }}
                    >
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <ul
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <th>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  alignContent: "center",
                                }}
                              >
                                <ul className="nav-item">
                                  <tr>
                                    <td>
                                      <td>
                                        <div>
                                          {item.count === 0 ? (
                                            <h3
                                            style={{ marginBottom:"3px",justifyContent:"space-around" }}
                                              className="btn btn-warning"
                                            >
                                              Zero
                                            </h3>
                                          ) : (
                                            <h3
                                            style={{ marginBottom:"3px",justifyContent:"space-around",height:"30px",width:"30px" }}
                                              className="btn btn-primary"
                                            >
                                              {item.count}
                                            </h3>
                                          )}
                                        </div>
                                      </td>
                                      <td>
                                        <button
                                          className="btn btn-secondary"
                                          onClick={() => {
                                            increment(item.id);
                                          }}
                                        >
                                          <GrAdd />
                                        </button>
                                      </td>
                                      <td>
                                        <button
                                          className="btn btn-info m-2"
                                          onClick={() => {
                                            decrement(item.id);
                                          }}
                                        >
                                          <FaMinus />
                                        </button>
                                      </td>
                                      <td>
                                        <button
                                         className="btn btn-danger"
                                          onClick={() => {
                                            handleDelete(item.id);
                                          }}
                                        >
                                          <BsTrashFill />
                                        </button>
                                      </td>
                                    </td>
                                  </tr>
                                </ul>
                              </div>
                            </th>
                          </ul>
                        )}
                      </Draggable>
                    </div>
                  ))}
                </ul>
              </tbody>
            )}
          </Droppable>
        </table>

        <button
         className="btn btn-success m-2"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </DragDropContext>
  );
}
