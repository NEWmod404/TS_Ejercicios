import React from "react";

export const FunctionComponent = () =>{

    const a:number =1;
    const b:number =2;

    const sum = (a:number, b:number):string =>{
        return `${a+b}`;
    }
    
    return (
        <>
            <h3>Suma de a + b</h3>
            p<p>El resultado es: {sum(a,b)}</p>
        </>
    )
}