import React, { useState,useReducer } from "react";
import { DragDropContext, Droppable,Draggable} from "react-beautiful-dnd";
// import Drag from "./Drag";
import Counterone from "./Counterone";
import "./Counter.css" ;
import { BsTrashFill } from "react-icons/bs";
export default function Counter() {
 const initialvalue = 0 ;
 const reducer =(State,action) =>{
   switch (action){
     case "item":
       return State + 1;
      case " reset":
        return State;
   }
 }

 
  const [listitems, setListitems] = useState([]);
  const [count,setCount] = useState(0)
  // const[Count,SetCount] = useState(0)
  const [State,dispatch] = useReducer(reducer,initialvalue);

  const handleArray = () => {
    console.log("funtion called");
    setCount(count + 1);
    setListitems((temp) => [...temp, {id:String(count)}]);
  };
  console.log("listitmes", listitems);
  const handleDelete = () => {
    setListitems(listitems.splice(1));
  };
  const handleDragEnd = (e) => {
    console.log(!e.destination)
    if (!e.destination) return;
    
    let tempData = Array.from(listitems);
    console.log(tempData);
    console.log("items");
    let [Source_data] = tempData.splice(e.source.index, 1);
    console.log(Source_data)
    console.log("source");
    tempData.splice(e.destination.index,0,Source_data);
    console.log(tempData.splice(e.destination.index,0,Source_data))
console.log(e);
  };
  const Cartitem = () => {
    dispatch("item")
  }
  const reset = () => {
dispatch("reset")
  }

  

  return (
    <DragDropContext onDragEnd={handleDragEnd} >
      <div>
        <table>
          <thead>
            <h2>counter</h2>
          </thead>
          <Droppable droppableId="tbody">
            {(provided) => (
              <tbody
                ref={provided.innerRef}
                {...provided.droppableProps}
                {...provided.dragHandleProps}
              >
                <tr>
                  <h2 style={{backgroundColor:"skyblue",borderRadius:"10px", height:"30px",width:"50px", aligntext:"center",alignContent:"center"}}>{State}</h2> 
                  <h2>item </h2>
                  <button style={{backgroundColor:"palegreen",borderRadius:"10px",height:"30px",width:"100px", aligntext:"center",alignContent:"center"}} onClick={reset}>Reset</button>
                  <button  style={{backgroundColor:"palegreen",borderRadius:"10px",height:"30px",width:"100px", aligntext:"center",alignContent:"center"}}>Reset all</button>
                </tr>
                <ul>
                  {listitems.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <ul
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        
                        <th style={{backgroundColor:"aqua",display:"inline-flex",alignItems: "center", alignContent: "center" }}>
                        <td   style={{backgroundColor:"hotpink",borderRadius:"10px",height:"30px",width:"30px", aligntext:"center",alignContent:"center"}}>{index}</td>
                          <Counterone Cartitem={Cartitem} />
                        </th>
                      </ul>
                    )}
                  </Draggable>
                  ))}
                </ul>
              </tbody>
            )}
          </Droppable>
        </table>

        <button  style={{backgroundColor:"sandybrown",borderRadius:"10px",height:"30px",width:"100px", aligntext:"center",alignContent:"center"}} onClick={handleArray}>Add</button>
        <button style={{backgroundColor:"sandybrown",borderRadius:"10px",height:"30px",width:"100px", aligntext:"center",alignContent:"center"}}onClick={handleDelete} >Delete <BsTrashFill/></button>
      </div>
    </DragDropContext>
  );
}
