import React from "react";

export const TypesComponent = () =>{
    
    const name: string | number = 'Gerardo';
    const isApprobed: boolean = true;
    const powers: string[]=['Java','Python','C']
    return (
        <>
        <h1>{name} {isApprobed?'Aprobado':'Jalado'}</h1>
        </>
    )
}