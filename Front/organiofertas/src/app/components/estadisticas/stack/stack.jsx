"use client"
import Stacko from "./chart"
import React, { use } from 'react';


const traerStack = async () => {
    const response =  await fetch(`http://localhost:5000/stats/stack`)
    return response.json()
  }

const dataProm = traerStack()

export default function Stack() {
    
    const data = use(dataProm)


    function getStack(stack) {
        const uniqueStack = [...new Set(stack)];
        const counts = uniqueStack.map(sta=> stack.filter(c => c === sta).length);
        return [uniqueStack, counts];
      }

        const [uniqueStack, counts] = getStack(data);
        

    return (
    <>
    <div>
        <Stacko stac={uniqueStack} num={counts}></Stacko>
   </div>
    </>
)


}