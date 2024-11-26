import React, { useState } from "react";

export const CounterComponent= () =>{

    //const count : number = 5;
    const [ count, setCount ]= useState<number>(5);


    const increment = (value:number) =>{
        return setCount(value+1);
    }

    return(
        <>
            <h3>Contador Actual: {count}</h3>
            <div>
                <button onClick={()=> increment(count)} style={{backgroundColor: 'red', color:'white'}}>+1</button>
            </div>
        </>
    )
} 