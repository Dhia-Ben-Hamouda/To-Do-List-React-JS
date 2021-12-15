import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import "./App.css";

const App = ()=>{
    
    const [ items , setitems  ] = useState([]);

    const [value , setvalue] = useState("");

    const [num , setnum] = useState(-1);
    

    useEffect( ()=>{
        setnum(num + 1);
    } , [items]);



    function change_input()
    {
        setitems( [  ...items  , value]  );
    }

    return(
        <div className="container">

            <div style = { { position:"absolute" , top:"20px" , left:"30px" , color:"white"  , fontSize:"25px" } }  >
                number of items : {num}
            </div>

            <h1>To Do List</h1>


            <div style= { { marginTop:"20px" }  }   >
                <input type="text"  value={ value }  onChange = { (event)=>{
                    setvalue(event.target.value);
                }  }  />
                <button  onClick = { change_input } >Add</button>
            </div>

            <ul>
                {
                    items.map(  (item , index)=>{
                        return(
                            <li  key={index}>{item}</li>
                        );
                    })     
                }
            </ul>
            
        </div>
    );
}

export default App;